@echo on

call mvn install:install-file -Dfile=Onetec_Framework-1.0.1.jar -DgroupId=Onetec_Framework -DartifactId=Onetec_Framework -Dversion=1.0.1 -Dpackaging=jar

echo *******************************************************************************
echo  Script finished. Please be sure all artifacts have been installed successfully
echo *******************************************************************************

pause

 