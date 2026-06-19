# FROM [イメージ] [タグ(バージョン)]
FROM python:3.13

# コマンドを実行する作業ディレクトリを作成
WORKDIR /app

# ファイルをコピー「/app/requirements.txt」へ配置
COPY requirements.txt .

# イメージ作成時に実行
# ライブラリのインストール
RUN pip install --no-cache-dir -r requirements.txt

# ホスト(ローカル)ファイルやディレクトリをDockerイメージにコピー
# ローカルで作成したソースコードや設定ファイルをDockerイメージにコピーして使用
# 今回だと作業ディレクトリの「/app」にコピーされる
# COPY <ホスト側のカレントディレクトリ> <コンテナのWORKDIR>
COPY . .

EXPOSE 8000

# Dockerコンテナ実行時にデフォルトで実行するコマンド
# uvicorn main:app --host 0.0.0.0 --port 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]