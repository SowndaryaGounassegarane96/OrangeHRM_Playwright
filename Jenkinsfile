
pipeline {

    agent any
    parameters
    {
        String(
           name: 'Test_Module',
        defaultValue: 'Login,Employee',
        description: 'Login,Employee'
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
                   if (params.Test_Module.contains('Login')) {
                bat 'npx playwright test tests/demo/login.spec.js'
            }

            if (params.Test_Module.contains('Employee')) {
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
    }
}