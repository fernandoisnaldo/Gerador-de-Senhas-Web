#!/usr/bin/env bash
# este shellscript é meramente um protótipo, não recomendo executar isso para fins práticos
mkdir -p build/GeradordeSenhas-web
cp index.html build/GeradordeSenhas-web/index.html
cp main.js build/GeradordeSenhas-web/main.js
cp style.css build/GeradordeSenhas-web/style.css
cp LICENSE build/GeradordeSenhas-web/LICENSE
cd build
ARCH="$(uname -m)"
if [ "$ARCH" = "x86_64" ]; then
    FILE="servo-x86_64-linux-gnu.tar.gz"
elif [ "$ARCH" = "aarch64" ]; then
    FILE="servo-aarch64-linux-gnu.tar.gz"
else
    echo "Arquitetura não suportada: $ARCH" >&2
    exit 1
fi
wget "https://download.servo.org/nightly/linux/$FILE"
tar zxf "$FILE"
rm "$FILE"
echo "#!/usr/bin/env bash" > Run.sh
echo "./servo/servoshell GeradordeSenhas-web/index.html --enable-experimental-web-platform-features"  >> Run.sh
chmod +x Run.sh
cd ..

