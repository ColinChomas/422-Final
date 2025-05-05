# Write your Readme here; explaining how to use this app# 422-Final


This application works in the following.

Run: npm run start

The program then watches the inbound folder
If any file with .csv is inputted into the inbound folder it will pick it up and parse it into a json.
It will then output a .json file with the data from the csv and output it to the outbound folder. The original .csv folder will subsequently be removed from inbound and dropped in the processed folder