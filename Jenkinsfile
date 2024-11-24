pipeline {
    agent any
    /* Pointing to the java SDK. Useful for jar packages */
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
        stage('Archive') {
            steps {
                archiveArtifacts allowEmptyArchive:true,
                    artifacts: '**/omarspetitions*.war'
            }
        }
        stage('Deploy') {
            steps {
                /* Prompting the developer to proceed with the deployment */
                input message: 'Do you want to deploy the package?', ok: 'Yes'

                /* Running the package directly in the host environment */
//                 sh 'mvn spring-boot:run -Dspring-boot.run.arguments="--server.port=9090"'
//                 sh 'java -jar ./target/omarspetitions.war'

                /* Running the package in a container */
                sh 'docker build -t "myimage" .'
                sh 'docker rm -f mycontainer || true' // removes container without error
                sh 'docker run -d --name "mycontainer" -p 9090:8080 myimage:latest'
            }
        }
    }
    post {
        always {
            sh 'docker system prune -af' // clears all unused docker components
            deleteDir() // clears pipeline directory
        }
    }
}