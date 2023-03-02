#!/bin/bash
if [ -z $1 ]; then
  exit 1
fi
for i in {1..12854}
do 
  OUTPUT=$(tail -c "+${i}" $1 | file -)
  echo $OUTPUT | egrep "^/dev/stdin: data" > /dev/null
  if [ $? -ne 0 ]; then
    echo "byte:" $i $OUTPUT
  fi
done
