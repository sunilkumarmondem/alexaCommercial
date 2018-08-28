#!/bin/bash

# ZIP_FILE="/tmp/src_tmp.zip"

# echo "----"

# if [ -f "${ZIP_FILE}" ]
# then
#     rm "${ZIP_FILE}"
# fi

# cd src
# npm install
# zip -9 -r "${ZIP_FILE}" * > /dev/null
# cd ..

# if [ -z "$1" ]
# then
#     FUNC_NAME="caireaDev"
# else 
#     FUNC_NAME="$1"
# fi

# FILE_SIZE=`ls -lh ${ZIP_FILE} |awk '{print \$5}'`
# echo "Using zip file: ${ZIP_FILE} size: ${FILE_SIZE}"
# echo "Upload function name: ${FUNC_NAME}"
# aws lambda update-function-code --function-name $FUNC_NAME --zip-file fileb://${ZIP_FILE}

rm src.zip
cd src
npm install
zip -r ../src.zip *
cd ..

if [ -z "$1" ]
then
	FUNC_NAME="commercialAlexadev"
else
	FUNC_NAME="$1"
fi


# tag =`git tag`
# version=`git log | head -5 | grep -E -o "[a-f0-9]{8}"  | head -1`
# ver = ${version} - ${tag}


echo "Upload function name: $FUNC_NAME"

aws lambda update-function-code --function-name $FUNC_NAME --zip-file fileb://src.zip
# aws lambda tag-resource --resource arn:aws:lambda:us-east-1:719407446226:function:cairea-devresident-prod-skill  --tags VERSION=$ver


