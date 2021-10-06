@echo on

    call mvn install:install-file -Dfile=testingapp-1.0.6.jar -DgroupId=GrupoOnetec -DartifactId=testingapp -Dversion=1.0.6 -Dpackaging=jar

echo *******************************************************************************
echo  Script finished. Please be sure all artifacts have been installed successfully
echo *******************************************************************************

pause

 