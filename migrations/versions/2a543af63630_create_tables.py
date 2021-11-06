"""create tables

Revision ID: 2a543af63630
Revises: 
Create Date: 2021-11-05 21:31:07.763624

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a543af63630'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('distilleries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('hashed_password', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('street', sa.String(), nullable=False),
    sa.Column('city', sa.String(), nullable=False),
    sa.Column('state', sa.String(), nullable=False),
    sa.Column('latitude', sa.Integer(), nullable=True),
    sa.Column('longitude', sa.Integer(), nullable=True),
    sa.Column('logo', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('drinks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('abv', sa.Integer(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('distillery_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['distillery_id'], ['distilleries.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('checkins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.Text(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('drink_id', sa.Integer(), nullable=False),
    sa.Column('distillery_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['distillery_id'], ['distilleries.id'], ),
    sa.ForeignKeyConstraint(['drink_id'], ['drinks.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('checkins')
    op.drop_table('drinks')
    op.drop_table('users')
    op.drop_table('distilleries')
    # ### end Alembic commands ###
