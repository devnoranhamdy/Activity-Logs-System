
HOST="$1"
PORT="$2"

echo "Waiting for $HOST:$PORT..."

while ! timeout 1 bash -c "echo > /dev/tcp/$HOST/$PORT" 2>/dev/null; do
  sleep 1
done

echo "$HOST:$PORT is available!"
exec "${@:3}"
