from pathlib import Path
import os
import json

jsonFileName = "RenderDictionary.json"
outputPath = "./src/routes/works/components/json"
imageDirectory = "./public/images/renders"
imgPaths = ["Env", "Char", "CharEnv"]
#imgPaths = [["/Env",4], ["/Char",15], ["/CharEnv",36]]

dict_env = {}
dict_char = {}
dict_charEnv = {}
dict_final = {
    "category": [
        {
            "0": [
                {
                    "path": f"/{imgPaths[0]}",
                    "images": [dict_env],
                }
            ],
            "1": [
                {
                    "path": f"/{imgPaths[1]}",
                    "images": [dict_char],
                }
            ],
            "2": [
                {
                    "path": f"/{imgPaths[2]}",
                    "images": [dict_charEnv],
                }
            ],
        }
    ]
}


def setIndex(dir, index):
    imgDir = imgPaths[dir]
    imgName = os.listdir(f"{imageDirectory}/{imgDir}")
    fileNameRaw = Path(f"/{imageDirectory}{imgDir}/{imgName[index]}").name
    fileName = fileNameRaw

    # Character Filter cuz I'm a moron who can't keep tihngs consistent

    bl_count = 0   
    bl_char = ["_", " "]  # Blacklisted Characters
    bl_char_replace = "-"  # Replace BL_Chars with this
    # Remove Blacklisted Characters
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


for p in range(len(imgPaths)):
    dir = os.listdir(f"{imageDirectory}/{imgPaths[p]}")
    for i in range(len(dir)):
        setIndex(p, i)
    print(p)


jsonFile = f"{outputPath}/{jsonFileName}"
with open(jsonFile, "w") as f:
    json.dump(dict_final, f, indent=4)
