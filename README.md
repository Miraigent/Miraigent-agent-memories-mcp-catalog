# Agent Memories MCP候補カタログ

Agent Memoriesで使う予定のMCP候補を整理する公開カタログです。

対象は、Agent Memories利用者、AIキャラクター運用者、個人クリエイター、個人事業主、副業でAIを活用したい人です。

このrepoは、MCP本体の実装repoではありません。まず「どんなMCPが欲しいか」「どの候補を無料で試したいか」「どの機能をAgent Memories本体と連携したいか」を公開で整理し、Issueで要望を集めるための場所です。

## 無料で1回試す

AIに投稿下書きを作らせるたびに、同じ口調、NG表現、構成を説明している人向けに、まず1回だけ使える無料テンプレを置いています。

- 無料テンプレ: [Creator Style Memory Starter](./FREE_CREATOR_STYLE_MEMORY_STARTER.md)
- 30秒版の使い方: [Creator Style Memory Quickstart](./CREATOR_STYLE_MEMORY_QUICKSTART.md)
- 使いどころ: X投稿、note導入文、ブログ構成、商品紹介文、AIキャラクター口調メモ
- 次の小さな行動: テンプレを1枚埋めて、次のAI下書きの前に貼る
- 欲しい拡張を送る: https://github.com/Miraigent/Miraigent-agent-memories-mcp-catalog/issues/new?template=use_case.md

## 1分で試すコピペブロック

Xやnoteで「AIに毎回同じ投稿スタイルを説明している」と感じた人は、まず次の4行だけを埋めてAIに貼ってください。

```text
基本トーン:
避けたい言葉:
好きな構成:
今回のテーマ:
```

貼る時の文:

```text
以下のスタイルメモを守って、投稿文を1つ作ってください。

基本トーン:
避けたい言葉:
好きな構成:
今回のテーマ:
```

試したあとに見ること:

- 自分が使わない言葉が減ったか
- 直す回数が少しでも減ったか
- 次回も残したい修正メモが1つ見つかったか

1つでも当てはまったら、欲しい用途をIssueで送ってください。
https://github.com/Miraigent/Miraigent-agent-memories-mcp-catalog/issues/new?template=use_case.md

4行テンプレを実際に試した人は、結果だけでも送れます。
https://github.com/Miraigent/Miraigent-agent-memories-mcp-catalog/issues/new?template=creator_style_trial_report.md

試した結果を送る時は、長い説明はいりません。

- 使った場面: X / note / blog / 商品紹介文 / キャラクター口調メモ
- 減った修正: 口調 / NG表現 / 構成 / CTA / まだ変わらない
- 次にほしい形: ファイル版 / 用途別テンプレ / 投稿後Reflection / Agent Memories連携

この3つだけで、次に作る無料版とPro版の境界を決めやすくなります。

## 試したあとにダウンロードする

4行テンプレを試して「AIに貼る前の確認表もファイルで持ちたい」と感じた人向けに、無料のGumroadキットを置いています。

- AI下書きを出す前に止める: [Human Review Gate for AI Drafts](https://miraigent.gumroad.com/l/human-review-gate-ai-drafts?utm_source=github&utm_medium=readme&utm_campaign=agent_memories_catalog)
- AIへ送ってよい内容を確認する: [Before You Send It to AI Checklist](https://miraigent.gumroad.com/l/before-you-send-it-to-ai-checklist?utm_source=github&utm_medium=readme&utm_campaign=agent_memories_catalog)
- まず無料で試すもの: README、チェックリスト、CSV、サンプルログ
- まだ入れていないもの: 非公開の記憶エンジン、顧客データ、認証情報、自動永続記憶

## 次に作る無料MCP: X Japanese Business Auto Post

「X投稿を毎日考えるのが重い」「1テーマから数日分の投稿に広げたい」人向けに、最初の集客用無料MCP候補をX投稿自動化に寄せています。

- 候補仕様: [X Japanese Business Auto Post MCP](./implementation-handoff/x-japanese-business-auto-post-mcp.md)
- 無料で見せる成果: 1テーマから7日分のX投稿案、投稿前チェック、CSV/export、BYO鍵でのX投稿フロー
- Agent Memoriesで伸ばす部分: 口調、NG表現、CTA、投稿結果、改善メモを次回に活かす記憶連携
- 安全境界: 実Credentialはrepoに置かない、ログイン/CAPTCHA/2FA回避はしない、noteはdraft/exportまで
- 欲しい使い方を送る: https://github.com/Miraigent/Miraigent-agent-memories-mcp-catalog/issues/new?template=x_auto_post_use_case.md

## 先に選ぶもの

次のどれかに当てはまる場合は、Issueで欲しい候補や利用例を送ってください。

- AIに毎回同じ口調、NG表現、投稿の好みを説明している
- note、X、ブログの下書き改善点が残らず、毎回やり直している
- AIキャラクターや創作設定を会話ごとに説明し直している
- 学習メモ、調査メモ、振り返りが次の行動に活きていない
- 便利なMCPを試したいが、無料版と有料版の境界を先に知りたい

Issueを送る:

- MCP候補リクエスト: https://github.com/Miraigent/Miraigent-agent-memories-mcp-catalog/issues/new?template=mcp_candidate_request.md
- 利用例の共有: https://github.com/Miraigent/Miraigent-agent-memories-mcp-catalog/issues/new?template=use_case.md

## いま見てほしい候補

- 需要リサーチベースの攻めた候補: [Research-Based Action MCP Candidates](./RESEARCH_BASED_ACTION_MCP_CANDIDATES.md)
- 最初の実装ハンドオフ: [X Japanese Business Auto Post MCP](./implementation-handoff/x-japanese-business-auto-post-mcp.md)
- Creator Growth Memory Kit: 口調、投稿テーマ、NG表現、30日分の発信案、改善メモをまとめて作る
- Agent Memory Launch Pack: 1つの企画から、note、Xスレッド、ブログ構成、FAQ、プレス下書きまで作る
- Auto Post & Improve: 投稿して終わりにせず、反応メモと次回改善へつなぐ
- Reflection to Action: 今日の会話や作業から、次に残す記憶候補と具体アクションを作る

まずは「どれが一番ほしいか」だけでもIssueに残せるようにしています。

無料MCPは、単なる体験版ではなく、使った人が「これを継続して記憶に残したい」と感じる入口にします。

## まず解決したい痛み

- AIと話しても、次の会話では忘れている
- 投稿の好み、口調、NG表現を毎回説明している
- 創作設定、学習メモ、振り返りが散らばって次に活きない
- noteやSNSの下書きを作っても、改善点が残らない
- 自分のAIが育っている感覚を持ちにくい

## 無料で試せる候補の考え方

Gasおじ型の「無料で今すぐ試せる」「実物が見える」「Free/Pro差分が分かる」構造を、Agent Memories向けにも取り入れます。

Free候補は、1用途だけを公開で試せる形にします。

- SNS下書きの好みを1回分だけ整理する
- note構成の好みを1記事分だけ整理する
- 今日の振り返りから記憶候補を作る
- 創作設定を1作品分だけ整理する

Agent Memories本体や契約者向けでは、複数用途の継続記憶、反応ログ、優先配布、連携機能へ広げます。

## 目的

- Agent Memories向けMCP候補を見える化する
- 無料配布候補と有料/契約者向け候補を分ける
- Issueで欲しいMCP、利用例、不具合、優先順位を集める
- 実装前にターゲットずれを防ぐ
- Miraigent / Agent Memoriesへの導線を整理する

## 想定ユーザー

- Agent Memoriesを使いたい個人ユーザー
- AIキャラクターやAIパートナーを運用したい人
- SNS、ブログ、note、創作、漫画、動画でAIを使いたいクリエイター
- 学習、調査、生活不安、手続き整理をAIに手伝ってほしい人
- 個人事業主や副業ユーザー
- 繰り返す判断、レビュー、振り返りを記憶として残したい人

## 最初に見るもの

- 正本と二重管理防止: [SOURCE_OF_TRUTH.md](./SOURCE_OF_TRUTH.md)
- repo更新先の整理: [REPO_ROUTING.md](./REPO_ROUTING.md)
- 公開導線の整理: [DISTRIBUTION_FLOW.md](./DISTRIBUTION_FLOW.md)
- 候補一覧: [CATALOG.md](./CATALOG.md)
- 需要リサーチベースの攻めたMCP候補: [RESEARCH_BASED_ACTION_MCP_CANDIDATES.md](./RESEARCH_BASED_ACTION_MCP_CANDIDATES.md)
- 無料/有料の境界と機能比較: [FREE_PAID_BOUNDARY.md](./FREE_PAID_BOUNDARY.md)
- 3段階商品設計: [THREE_TIER_PRODUCT_DESIGN.md](./THREE_TIER_PRODUCT_DESIGN.md)
- 公開ロードマップ: [ROADMAP.md](./ROADMAP.md)
- 公開活動ログ / MCP設計メモ: [public-lab/agent-memories](./public-lab/agent-memories/README.md)
- Issue投稿ルール: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 公開するもの

- MCP候補名
- 想定ユーザー
- 無料/有料/契約者優遇の分類
- 入力する情報
- 出力される結果
- Agent Memoriesでの使い方
- Issueで集めたいフィードバック

## 公開しないもの

- MIRAI Memory本体の内部仕様
- 記憶エンジンの非公開実装
- working memory MCPの実装
- 顧客情報、個人情報、秘密情報
- token、cookie、API key、private key
- 有料商品の完全版

## 動線

1. このカタログでMCP候補を見る
2. 欲しい候補や使い方をIssueに投稿する
3. 反応が強い候補から無料MCPまたはalpha版を作る
4. Agent Memories本体で使える候補へ育てる
5. 企業向けの業務整理や導入相談はMiraigentへつなぐ

## 関連リンク

- Agent Memories: https://agentmemories.jp/?utm_source=github&utm_medium=readme&utm_campaign=agent-memories-mcp-catalog
- Miraigent公開リソース: https://miraigent.com/resources?utm_source=github&utm_medium=readme&utm_campaign=agent-memories-mcp-catalog
- Miraigent無料診断: https://miraigent.com/diagnosis?utm_source=github&utm_medium=readme&utm_campaign=agent-memories-mcp-catalog
- Miraigent無料MCP: https://github.com/Miraigent/miraigent-free-ai-ops-mcp?utm_source=github&utm_medium=readme&utm_campaign=agent-memories-mcp-catalog

## GitHub description案

現在のdescription:

Agent Memories利用者、AIキャラクター運用者、個人/クリエイター、個人事業主、副業便利ツール

より短くするなら:

Agent Memories向けMCP候補カタログ。AIキャラクター、創作、SNS、学習、生活補助、振り返り、運用記憶の候補を公開します。
