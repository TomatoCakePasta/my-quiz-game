from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select
from config import get_settings

# ファイル分割をする

class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    password: str = Field(min_length=8)

# <database>://<username>:<password>@<hostIpAddress>:<port>/<tablename>
postgresql_url = get_settings().postgresql_database_url

engine = create_engine(postgresql_url)

# make table
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

# make Session dependency
def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]