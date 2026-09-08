
pipeline {

    agent any
    parameters
    {
        choice(
            name:'Test_Module',
            choices:['Login','Employee'],
            description:'Login'
        )
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'OrangeHRMModules',
                    url: 'https://github.com/SowndaryaGounassegarane96/OrangeHRM_Playwright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (params.Test_Module == 'Login') {
                        bat 'npx playwright test tests/demo/login.spec.js'
                    }
                    else if (params.Test_Module == 'Employee') {
                        bat 'npx playwright test tests/demo/emp.spec.js'
                    }
                    else {
                        bat 'npx playwright test'
                    }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true
        }
    }
}
