from app import create_app

app = create_app('config.DevelopmentConfig')
app.run()
