"""empty message

Revision ID: 4110d60e5b47
Revises: None
Create Date: 2014-11-17 15:10:16.850000

"""

# revision identifiers, used by Alembic.
revision = '4110d60e5b47'
down_revision = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('regions',
    sa.Column('id', sa.String(length=4), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('address', sa.String(length=120), nullable=False),
    sa.Column('city', sa.String(length=80), nullable=False),
    sa.Column('state', sa.String(length=2), nullable=False),
    sa.Column('zip', sa.String(length=15), nullable=False),
    sa.Column('phone', sa.String(length=15), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('zip')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=128), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('first_name', sa.String(length=30), nullable=True),
    sa.Column('last_name', sa.String(length=30), nullable=True),
    sa.Column('active', sa.Boolean(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('risk_tags',
    sa.Column('id', sa.String(length=4), nullable=False),
    sa.Column('tag', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('id'),
    sa.UniqueConstraint('tag')
    )
    op.create_table('case_types',
    sa.Column('id', sa.String(length=15), nullable=False),
    sa.Column('description', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('id')
    )
    op.create_table('roles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('cases',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('crd_number', sa.Integer(), nullable=False),
    sa.Column('start_date', sa.Date(), nullable=False),
    sa.Column('end_date', sa.Date(), nullable=True),
    sa.Column('case_type_id', sa.String(length=15), nullable=False),
    sa.Column('region_id', sa.String(length=4), nullable=False),
    sa.Column('primary_id', sa.Integer(), nullable=False),
    sa.Column('secondary_id', sa.Integer(), nullable=False),
    sa.Column('mars_risk_score', sa.Integer(), nullable=True),
    sa.Column('qau_risk_score', sa.Integer(), nullable=True),
    sa.Column('examiner_risk_score', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['case_type_id'], ['case_types.id'], ),
    sa.ForeignKeyConstraint(['primary_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['region_id'], ['regions.id'], ),
    sa.ForeignKeyConstraint(['secondary_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('case_risk_tags',
    sa.Column('risk_tag_id', sa.Integer(), nullable=True),
    sa.Column('case_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['case_id'], ['cases.id'], ),
    sa.ForeignKeyConstraint(['risk_tag_id'], ['risk_tags.id'], )
    )
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('case_risk_tags')
    op.drop_table('cases')
    op.drop_table('roles')
    op.drop_table('case_types')
    op.drop_table('risk_tags')
    op.drop_table('users')
    op.drop_table('regions')
    ### end Alembic commands ###