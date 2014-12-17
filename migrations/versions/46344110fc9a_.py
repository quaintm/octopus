"""empty message

Revision ID: 46344110fc9a
Revises: 4ca315186aa0
Create Date: 2014-12-17 13:19:06.478167

"""

# revision identifiers, used by Alembic.
revision = '46344110fc9a'
down_revision = '4ca315186aa0'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    # op.drop_table('sqlite_sequence')
    op.drop_table('tasks')
    op.create_table('tasks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('task_name', sa.Text(), nullable=True),
    sa.Column('task_desc', sa.Text(), nullable=True),
    sa.Column('start_date', sa.Date(), nullable=False),
    sa.Column('end_date', sa.Date(), nullable=True),
    sa.Column('creator_id', sa.Integer(), nullable=True),
    sa.Column('case_id', sa.Integer(), nullable=False),
    sa.Column('parent_case', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['case_id'], ['cases.id'], ),
    sa.ForeignKeyConstraint(['creator_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['parent_case'], ['cases.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sqlite_autoincrement=True
    )
    op.create_index(op.f('ix_tasks_end_date'), 'tasks', ['end_date'], unique=False)
    op.create_index(op.f('ix_tasks_start_date'), 'tasks', ['start_date'], unique=False)
    op.create_index(op.f('ix_tasks_task_name'), 'tasks', ['task_name'], unique=False)
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tasks')
    op.create_table('tasks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('task_name', sa.Text(), nullable=True),
    sa.Column('task_desc', sa.Text(), nullable=True),
    sa.Column('start_date', sa.Date(), nullable=False),
    sa.Column('end_date', sa.Date(), nullable=True),
    sa.Column('task_creator', sa.Integer(), nullable=True),
    sa.Column('case_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['case_id'], ['cases.id'], ),
    sa.ForeignKeyConstraint(['task_creator'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sqlite_autoincrement=True
    )
    op.create_index(op.f('ix_tasks_end_date'), 'tasks', ['end_date'], unique=False)
    op.create_index(op.f('ix_tasks_start_date'), 'tasks', ['start_date'], unique=False)
    op.create_index(op.f('ix_tasks_task_name'), 'tasks', ['task_name'], unique=False)
    # op.create_table('sqlite_sequence',
    # sa.Column('name', sa.NullType(), nullable=True),
    # sa.Column('seq', sa.NullType(), nullable=True)
    # )
    ### end Alembic commands ###