# CRM-APP

## Dependencies

1. [PHP/Laravel](https://laravel.com/docs/12.x/installation) (8.2^ / 12.x)
```powershell
# Windows Powershell - Run as administrator...
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
```
2. [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)  
3. MySQL DB
4. shadcn (component library)
5. React.js
6. Tailwind.css

## Notes

- 

## App Setup/Usage

#### Install Dependencies
```bash
#composer dependencies
composer install

#npm dependencies
npm install
```

#### Setup Database Tables/Connection
```bash
# setup database and tables
php artisan migrate

# to empty database/tables
php artisan migrate:fresh
```
use ```cas_dummy_data.sql``` to insert dummy data to table
`TODO: transfer dummy data to seeders`

#### Run Development
```bash 
# run both commands on separate terminals
# for hot-reloading
npm run dev

# load application
php artisan serve
```

#### Other Notes
- `'include_stacktraces' => false` in config/logging.php