pipeline {
    agent any
    /* Pointing to the java SDK. This is only required to run jar packages */
//    environment {
//        JAVA_HOME = "/usr/lib/jvm/java-21-openjdk-amd64"
//    }
    stages {
        stage('GetProject') {
            steps {
                git 'https://github.com/Om-i/CT5171-CA.git'
            }
        }
    }
}