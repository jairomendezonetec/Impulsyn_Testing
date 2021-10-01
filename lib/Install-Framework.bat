@echo on

    call mvn install:install-file -Dfile=testingapp-1.0.0.jar -DgroupId=io.github.jairo91 -DartifactId=testingapp -Dversion=1.0.0 -Dpackaging=jar

echo *******************************************************************************
echo  Script finished. Please be sure all artifacts have been installed successfully
echo *******************************************************************************

pause

 