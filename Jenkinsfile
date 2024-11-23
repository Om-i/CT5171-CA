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
        stage('Build') {
            steps {
                sh 'mvn clean'
                sh 'mvn compile'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test-compile'
                sh 'mvn surefire:test'
                /* Running the whole test phase would clean the project again */
//                sh 'mvn test'
            }
        }
        stage('Package') {
                    steps {
                         sh 'mvn -Dmaven.test.skip package'
                    }
                }
    }
}