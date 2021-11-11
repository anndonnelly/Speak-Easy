"""empty message

Revision ID: 8c35da0d39e6
Revises: bae960340469
Create Date: 2021-11-11 15:26:19.571365

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c35da0d39e6'
down_revision = 'bae960340469'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('checkins', sa.Column('location', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('checkins', 'location')
    # ### end Alembic commands ###