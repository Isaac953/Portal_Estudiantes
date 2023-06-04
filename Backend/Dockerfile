FROM python:3.11.3

RUN apt-get update && apt-get install -y libpq-dev

WORKDIR /app

COPY requirements.txt /app

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY . /app
