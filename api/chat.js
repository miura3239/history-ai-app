export default function handler(req, res) {
  res.status(200).json({
    reply: "テスト成功です！APIは動いています！"
  });
}

