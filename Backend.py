""" This code is written by Eng. Abduallah Damash at 27/11/2021
Content Based Image Classifier project for Impact Hup
Middle East Technical University, All Right Saved"""
import numpy as np
import pandas as pd
from pyzbar import pyzbar
import cv2
from PIL import Image
from glob import glob
from urllib.request import urlopen

def decode(image):
  # decodes all barcodes from an image
  decoded_objects = pyzbar.decode(image)
  for obj in decoded_objects:
    # draw the barcode
    #print("detected barcode:", obj)
    image = draw_barcode(obj, image)
    # print barcode type & data
    #print("Type:", obj.type)
    #print("Data:", obj.data)
    #print()

  return image, obj

def draw_barcode(decoded, image):
    # n_points = len(decoded.polygon)
    # for i in range(n_points):
    #     image = cv2.line(image, decoded.polygon[i], decoded.polygon[(i+1) % n_points], color=(0, 255, 0), thickness=5)
    # uncomment above and comment below if you want to draw a polygon and not a rectangle
    image = cv2.rectangle(image, (decoded.rect.left, decoded.rect.top),
                          (decoded.rect.left + decoded.rect.width, decoded.rect.top + decoded.rect.height),
                          color=(0, 255, 0),
                          thickness=5)
    return image

def overlay_image_alpha(img, img_overlay, x, y, alpha_mask):
    """Overlay `img_overlay` onto `img` at (x, y) and blend using `alpha_mask`.

    `alpha_mask` must have same HxW as `img_overlay` and values in range [0, 1].
    """
    # Image ranges
    y1, y2 = max(0, y), min(img.shape[0], y + img_overlay.shape[0])
    x1, x2 = max(0, x), min(img.shape[1], x + img_overlay.shape[1])

    # Overlay ranges
    y1o, y2o = max(0, -y), min(img_overlay.shape[0], img.shape[0] - y)
    x1o, x2o = max(0, -x), min(img_overlay.shape[1], img.shape[1] - x)

    # Exit if nothing to do
    if y1 >= y2 or x1 >= x2 or y1o >= y2o or x1o >= x2o:
        return

    # Blend overlay within the determined ranges
    img_crop = img[y1:y2, x1:x2]
    img_overlay_crop = img_overlay[y1o:y2o, x1o:x2o]
    alpha = alpha_mask[y1o:y2o, x1o:x2o, np.newaxis]
    alpha_inv = 1.0 - alpha

    img_crop[:] = alpha * img_overlay_crop + alpha_inv * img_crop

def resizeImage (imga):
    #print('Original Dimensions : ', imga.shape)

    # scale_percent = 40  # percent of original size
    # width = int(imga.shape[1] * scale_percent / 100)
    # height = int(imga.shape[0] * scale_percent / 100)
    width = int(275)
    height = int(275)
    dim = (width, height)

    # resize image
    resized = cv2.resize(imga, dim, interpolation=cv2.INTER_AREA)

    #print('Resized Dimensions : ', resized.shape)

    # cv2.imshow("Resized image", resized)
    # cv2.waitKey(0)
    return resized

def matchBracodeWithDatabase (barcodeImage, filename, URLColumnName,BarcodeColumnName ):
    database = pd.read_excel(filename)
    photosURL = database[URLColumnName]

    img2 = cv2.imread(barcodeImage)
    decodedIm, decodedObj = decode(img2)
    try:
        intdecodedObj = int(decodedObj.data.decode("utf-8"))
    except:
        intdecodedObj = decodedObj.data.decode("utf-8")
    a = database[BarcodeColumnName]
    b = database[URLColumnName]
    c = database['MARKA']
    d = database['MODEL ADI']
    e = database['ÜRÜN ÇEŞİT']
    f = database['BEDEN']
    try:
        for barcode, url, brand, modol, type, size  in zip(a, b,c ,d,e,f):
            if barcode == intdecodedObj:
                url = url
                #print(barcode, url)


                img = np.array(Image.open(urlopen(url)))
                img2 = resizeImage(img)
                print('match')

                # black blank image
                blank_image = 255 * np.ones(shape=[620, 380, 3], dtype=np.uint8)

                #print(blank_image.shape, img2.shape)

                # Prepare inputs
                x, y = 50, 0
                img = blank_image
                img_overlay_rgba = cv2.cvtColor(img2, cv2.COLOR_RGB2RGBA).copy()

                # Perform blending
                alpha_mask = img_overlay_rgba[:, :, 3] / 255.0
                img_result = img[:, :, :3].copy()
                img_overlay = img_overlay_rgba[:, :, :3]
                overlay_image_alpha(img_result, img_overlay, x, y, alpha_mask)

                # Save result
                out = Image.fromarray(img_result)
                np_out = np.array(out)
                #print(np_out.shape)
                np_out2 = cv2.putText(np_out,str(brand) , (40, 325), cv2.FONT_HERSHEY_PLAIN, 1, (255, 0, 0), 2)
                np_out3 = cv2.putText(np_out2,str(modol) , (40, 400), cv2.FONT_HERSHEY_PLAIN, 1, (255, 0, 0), 2)
                np_out4 = cv2.putText(np_out3,str(type) , (40, 475), cv2.FONT_HERSHEY_PLAIN, 1, (255, 0, 0), 2)
                FinalImage = cv2.putText(np_out4,str(size) , (40, 550), cv2.FONT_HERSHEY_PLAIN, 1, (255, 0, 0), 2)
        return FinalImage
    except:
        blank_image = 255 * np.ones(shape=[620, 380, 3], dtype=np.uint8)
        blank_image = cv2.putText(blank_image, 'Sorry Not Found', (40, 325), cv2.FONT_HERSHEY_PLAIN, 2, (255, 0, 0), 2)
        print(f'Sorry Barcode {intdecodedObj} is not found')
        return blank_image


if __name__ == "__main__":

    filename= 'Database.xlsx'
    URLColumnName= 'FOTO URL'
    BarcodeColumnName = 'BARKOD'
    barcodes = glob("barcode*")
    print(barcodes)
    for barcode_file in barcodes:
        #barcodeImage = cv2.imread(barcode_file)

        finalimage = matchBracodeWithDatabase(barcode_file,filename,URLColumnName, BarcodeColumnName )

        cv2.imshow("img", finalimage)
        cv2.waitKey(0)
