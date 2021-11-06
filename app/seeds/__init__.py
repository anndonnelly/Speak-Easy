from flask.cli import AppGroup
from .users import seed_users, undo_users
from .distilleries import seed_distilleries, undo_distilleries
from .checkins import seed_checkins, undo_checkins

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_distilleries()
    seed_checkins()
    


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_distilleries()
    undo_checkins()
    
