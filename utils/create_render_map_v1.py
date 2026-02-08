from pathlib import Path
import os
import json

jsonFileName = "RenderDictionary.json"
outputPath = "./src/routes/works/components/json"
imageDirectory = "./public/images/renders"
imgPaths = ["Env", "Char", "CharEnv"]

dict_env = []
dict_char = []
dict_charEnv = []
dict_final = [
    {
        "label": "Characters in Environments",
        "path": f"/{imgPaths[2]}/",
        "images": dict_charEnv,
    },
    {
        "label": "Environments",
        "path": f"/{imgPaths[0]}/",
        "images": dict_env,
    },
    {
        "label": "Character Portraits",
        "path": f"/{imgPaths[1]}/",
        "images": dict_char,
    },
]


def setIndex(dir, index):
    imgDir = imgPaths[dir]
    imgName = os.listdir(f"{imageDirectory}/{imgDir}")
    fileNameRaw = Path(f"/{imageDirectory}{imgDir}/{imgName[index]}").name
    fileName = fileNameRaw

    # Character Filter cuz I'm a moron who can't keep tihngs consistent

    bl_count = 0
    bl_char = ["_"]  # Blacklisted Characters
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
        fileMonth = "January"
    elif fileMonthStr == "Feb" or fileMonthStr == "Feburary":
        fileMonth = "February"
    elif fileMonthStr == "Mar" or fileMonthStr == "March":
        fileMonth = "March"
    elif fileMonthStr == "Apr" or fileMonthStr == "April":
        fileMonth = "April"
    elif fileMonthStr == "May":
        fileMonth = "May"
    elif fileMonthStr == "Jun" or fileMonthStr == "June":
        fileMonth = "June"
    elif fileMonthStr == "Jul" or fileMonthStr == "July":
        fileMonth = "July"
    elif fileMonthStr == "Aug" or fileMonthStr == "August":
        fileMonth = "August"
    elif fileMonthStr == "Sep" or fileMonthStr == "September" or fileMonthStr == "Sept":
        fileMonth = "September"
    elif fileMonthStr == "Oct" or fileMonthStr == "October":
        fileMonth = "October"
    elif fileMonthStr == "Nov" or fileMonthStr == "November":
        fileMonth = "November"
    elif fileMonthStr == "Dec" or fileMonthStr == "December":
        fileMonth = "December"
    dict_img_temp = {
        "name": renderName,
        "filename": fileNameRaw,
        "type": fileExtSplit[1],
        "publishMonth": fileMonth,
        "publishYear": fileYear,
    }
    if dir == 0:
        dict_env.append(dict_img_temp)
    elif dir == 1:
        dict_char.append(dict_img_temp)
    elif dir == 2:
        dict_charEnv.append(dict_img_temp)


for p, path in enumerate(imgPaths):
    dir = os.listdir(f"{imageDirectory}/{imgPaths[p]}")
    for i, img in enumerate(dir):
        setIndex(p, i)


jsonFile = f"{outputPath}/{jsonFileName}"
with open(jsonFile, "w") as f:
    json.dump(dict_final, f, indent=4)
