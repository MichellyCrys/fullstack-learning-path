"""Adicionando created_at e updated_at na tabela de todos

Revision ID: 233109ae6ce3
Revises: 63648c1d78a8
Create Date: 2026-03-02 13:42:50.411353
"""

from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa

revision: str = '233109ae6ce3'
down_revision: Union[str, Sequence[str], None] = '63648c1d78a8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        'todos',
        sa.Column('created_at', sa.DateTime(), nullable=True)
    )

    op.add_column(
        'todos',
        sa.Column('updated_at', sa.DateTime(), nullable=True)
    )


def downgrade() -> None:
    op.drop_column('todos', 'updated_at')
    op.drop_column('todos', 'created_at')