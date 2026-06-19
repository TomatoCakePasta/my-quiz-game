# FROM [イメージ] [タグ(バージョン)]
FROM node:22

# コマンドを実行する作業ディレクトリを作成
WORKDIR /app

COPY package*.json ./

# イメージのビルド時に実行するシェルコマンド
# イメージにソフトを入れたり、セットアップの手順を実行する
RUN npm install

# ホスト(ローカル)ファイルやディレクトリをDockerイメージにコピー
# ローカルで作成したソースコードや設定ファイルをDockerイメージにコピーして使用
# 今回だと作業ディレクトリの「/app」にコピーされる
# COPY <ホスト側のカレントディレクトリ> <コンテナのWORKDIR>
COPY . .

# コンテナのポートを公開
EXPOSE 5173

# Dockerコンテナ実行時にデフォルトで実行するコマンド
# npm run dev -- --host
CMD ["npm", "run", "dev", "--", "--host"]