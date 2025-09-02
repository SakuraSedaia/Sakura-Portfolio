from pathlib import Path
import os
import json

jsonFileName = "RenderDictionary.json"
outputPath = "./src/routes/assetpages/json"
imageDirectory = "./public/images/renders"
imgPaths = [["/Env", 4], ["/Char", 15], ["/CharEnv", 36]]

dict_env = {}
dict_char = {}
dict_charEnv = {}
dict_final = {
    "env": [{"path": imgPaths[0][0], "imgTotal": imgPaths[0][1], "images": [dict_env]}],
    "char": [
        {"path": imgPaths[1][0], "imgTotal": imgPaths[1][1], "images": [dict_char]}
    ],
    "charEnv": [
        {"path": imgPaths[2][0], "imgTotal": imgPaths[2][1], "images": [dict_charEnv]}
    ],
}

def setIndex(dir, index):
    imgDir = imgPaths[dir]
    imgName = os.listdir(imageDirectory + imgDir[0])
    fileNameRaw = Path(f"{imageDirectory}{imgDir}/{imgName[index]}").name
    fileName = fileNameRaw
    
    # Character Filter cuz I'm a moron who can't keep tihngs consistent
    bl_char = ["_", " "]  # Blacklisted Characters
    bl_char_replace = "-"  # Replace BL_Chars with this
    bl_count = 0
    for b in bl_char:
        filterChar = bl_char[bl_count]
        if fileNameRaw.count(filterChar) > 0:
            fileName = fileNameRaw.replace(filterChar, bl_char_replace)
        bl_count = bl_count + 1

    fileExtSplit = fileName.split(".")
    fileNameSplit = fileExtSplit[0].split("-")
    fileYear = int("".join(filter(str.isdigit, fileExtSplit[0])))
    fileNameSplit = fileExtSplit[0].split("-")
    renderName = fileNameSplit[0]
    fileMonthStr = fileNameSplit[1].strip(str(fileYear))
    fileMonth = 0
    
    if fileMonthStr == "Jan" or fileMonthStr == "January":
        fileMonth = 0
    elif fileMonthStr == "Feb" or fileMonthStr == "Feburary":
        fileMonth = 1
    elif fileMonthStr == "Mar" or fileMonthStr == "March":
        fileMonth = 2
    elif fileMonthStr == "Apr" or fileMonthStr == "April":
        fileMonth = 3
    elif fileMonthStr == "May":
        fileMonth = 4
    elif fileMonthStr == "Jun" or fileMonthStr == "June":
        fileMonth = 5
    elif fileMonthStr == "Jul" or fileMonthStr == "July":
        fileMonth = 6
    elif fileMonthStr == "Aug" or fileMonthStr == "August":
        fileMonth = 7
    elif fileMonthStr == "Sep" or fileMonthStr == "September":
        fileMonth = 8
    elif fileMonthStr == "Oct" or fileMonthStr == "October":
        fileMonth = 9
    elif fileMonthStr == "Nov" or fileMonthStr == "November":
        fileMonth = 10
    elif fileMonthStr == "Dec" or fileMonthStr == "December":
        fileMonth = 11
    dict_img_temp = {
        "name": renderName,
        "filename": fileNameRaw,
        "type": fileExtSplit[1],
        "publishMonth": fileMonth,
        "publishYear": fileYear,
    }
    if dir == 0:
        if index not in dict_env.keys():
            dict_env[index] = dict_img_temp
    elif dir == 1:
        if index not in dict_char.keys():
            dict_char[index] = dict_img_temp
    elif dir == 2:
        if index not in dict_charEnv.keys():
            dict_charEnv[index] = dict_img_temp


pathCount = 0
for p in imgPaths:
    dir = os.listdir(imageDirectory + imgPaths[pathCount][0])
    imgCount = 0
    for i in range(p[1]):
        setIndex(pathCount, imgCount)
        imgCount = imgCount + 1
    pathCount = pathCount + 1
    
    
jsonFile = f"{outputPath}/{jsonFileName}"
with open(jsonFile, "w") as f:
    json.dump(dict_final, f, indent=4)