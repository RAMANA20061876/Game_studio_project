pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ramana1771/game-studio-showcase'
        IMAGE_TAG  = '1.0'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% -t %IMAGE_NAME%:latest .'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD')]) {
                    bat 'echo %DOCKER_PASSWORD%| docker login -u %DOCKER_USERNAME% --password-stdin'
                    bat 'docker push %IMAGE_NAME%:%IMAGE_TAG%'
                    bat 'docker push %IMAGE_NAME%:latest'
                }
            }
        }
    }

    post {
        always {
            bat 'docker logout'
        }
    }
}