"""empty message

Revision ID: df12e1bc3c04
Revises: d777f3508c8d
Create Date: 2021-11-11 12:26:32.652184

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df12e1bc3c04'
down_revision = 'd777f3508c8d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('checkins', 'location')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('checkins', sa.Column('location', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
