# Week 2 Notes

# Command Line 
A Command Line an alternative method of communicating with computers other than a Graphical User Interface (GUI). Using a Command Line is often faster and less error prone compared to using a GUI.

Command line commands:
```
cd          // change directory
pwd         // print current directory
ls          // show directory contents
cat         // prints file content
cp          // copies files
mv          // moves files 
touch       // create file
mkdir       // create folder
rm          // remove file / folder
history     // view command history
```

## Pipe Command
The pipe command "|" is used to chain the output of one command directly into the input of another. 

Example pipe command usage:
```
cat file.txt | wc -w
```

## Redirection Commands 
The redirection commands "<" and ">"  are used to redirect outputs of a command to a specified location.

Example redirection command usage:
```
cat > file.txt     // get user input, store to file.txt
cat < file.txt     // prints file content of file.txt
ls -l > file.txt   // stores the output of ls -l to file.txt
```

## Grep Command
The global regular expression print command "grep" is used to search for specified patterns within file contents and folders. 

Example grep command usage:
```
grep foo file.txt      // search for words that contain foo in file.txt
grep -i foo file.txt   // search for words that contain foo in file.txt, ignoring case sensitivity

```