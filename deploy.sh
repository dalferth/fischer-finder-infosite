npm run build

cp captain-definition .output

tar -czf deploy.tar .output

export $(cat .env | xargs) && caprover deploy -a mesh-2023
