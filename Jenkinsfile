pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
        }
    }
    environment {
	    HOME= '.'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test'){
            steps {
                sh './scripts/test.sh'
            }
        }
    }
}
