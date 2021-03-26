from app import create_app
from scheduler import scheduler

app = create_app('config.DevelopmentConfig')
scheduler.init_app(app)
scheduler.start()
app.run()
