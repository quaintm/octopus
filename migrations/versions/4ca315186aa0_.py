"""empty message

Revision ID: 4ca315186aa0
Revises: e60c3d8b005
Create Date: 2014-12-16 16:17:47.415578

"""

# revision identifiers, used by Alembic.
revision = '4ca315186aa0'
down_revision = 'e60c3d8b005'

from alembic import op
import sqlalchemy as sa


def upgrade():
  ### commands auto generated by Alembic - please adjust! ###
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
  op.create_index(op.f('ix_tasks_end_date'), 'tasks', ['end_date'],
                  unique=False)
  op.create_index(op.f('ix_tasks_start_date'), 'tasks', ['start_date'],
                  unique=False)
  op.create_index(op.f('ix_tasks_task_name'), 'tasks', ['task_name'],
                  unique=False)
  op.create_table('task_user_map',
                  sa.Column('user_id', sa.Integer(), nullable=True),
                  sa.Column('task_id', sa.Integer(), nullable=True),
                  sa.ForeignKeyConstraint(['task_id'], ['tasks.id'], ),
                  sa.ForeignKeyConstraint(['user_id'], ['users.id'], )
  )
  op.create_index(op.f('ix_task_user_map_task_id'), 'task_user_map',
                  ['task_id'], unique=False)
  op.create_index(op.f('ix_task_user_map_user_id'), 'task_user_map',
                  ['user_id'], unique=False)
  # op.drop_table('sqlite_sequence')
  ### end Alembic commands ###


def downgrade():
  ### commands auto generated by Alembic - please adjust! ###
  # op.create_table('sqlite_sequence',
  # sa.Column('name', sa.NullType(), nullable=True),
  # sa.Column('seq', sa.NullType(), nullable=True)
  # )
  op.drop_index(op.f('ix_task_user_map_user_id'), table_name='task_user_map')
  op.drop_index(op.f('ix_task_user_map_task_id'), table_name='task_user_map')
  op.drop_table('task_user_map')
  op.drop_index(op.f('ix_tasks_task_name'), table_name='tasks')
  op.drop_index(op.f('ix_tasks_start_date'), table_name='tasks')
  op.drop_index(op.f('ix_tasks_end_date'), table_name='tasks')
  op.drop_table('tasks')
  ### end Alembic commands ###
