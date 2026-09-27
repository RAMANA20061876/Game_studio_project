pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t ramana1771/game-studio-showcase:1.0 .'
            }
        }

        stage('Docker Push') {
            steps {
                bat 'docker push ramana1771/game-studio-showcase:1.0'
            }
        }
    }
}