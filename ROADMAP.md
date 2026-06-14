# 公開ロードマップ

## Phase 1: 候補カタログ公開

目的:

- Agent Memories用MCP候補を公開で整理する
- Issueで欲しいMCPを集める
- 無料/有料/契約者優遇の候補を分ける

公開物:

- README
- CATALOG
- ROADMAP
- THREE_TIER_PRODUCT_DESIGN
- Issue template

## Phase 2: 集客用無料フラッグシップの選定

方針:

- 無料MCPは小さすぎる体験版にしない
- まず人が集まる強い無料ツールを出す
- 法的NG、規約違反、認証回避、個人情報漏洩は避ける
- ただし、価値の中心を削りすぎない
- 無料で成果を出し、継続記憶/長期改善/個別最適化をAgent Memoriesへつなげる
- 需要リサーチベース候補は [RESEARCH_BASED_ACTION_MCP_CANDIDATES.md](./RESEARCH_BASED_ACTION_MCP_CANDIDATES.md) を正本にする

優先候補:

S-0. note Auto Publishing MCP
S-0. X Japanese Business Auto Post MCP
S-1. Creator Growth Memory Kit MCP
S-2. Agent Memory Launch Pack MCP
S-3. Reflection to Action MCP
0. Auto Post & Improve Starter MCP

保留/部品扱い:

- Reflection Lite MCP
- SNS下書き Lite MCP
- ブログ/note構成 Lite MCP

これらは単体の看板候補にしない。BtoCユーザーが「すごい、使える」と感じる強い成果物の一部として組み込む。

理由:

- 無料配布の目的は、Issue収集だけでなく認知と集客を作ること
- 使った直後に「便利」と分かる成果物を出す
- SNS/note/GitHubで紹介されやすい
- Agent Memories本体へ「この設定や改善を残したい」という動機を作る
- 初回公開候補として、一般無料では規約/API許可範囲内の投稿補助、または本人確認付きのテキスト投稿実行まで出す
- 投稿URL、投稿結果、反応メモ、次回改善案はAgent Memoriesユーザー特典にする
- 画像、動画、複数媒体、定期投稿、長期反応分析は有料/上位拡張に残す
- 個人/クリエイターが使いやすい
- 無料配布の価値が分かりやすい
- Agent Memoriesの記憶価値へつなげやすい
- 無料版はその場で試し、有料版は記憶として積み上げる境界を作りやすい
- 見せ方は「投稿体験 -> 記録したくなる -> Agent Memories登録」の順番にする
- 初回検証はX単体から開始し、成功パターンをnote/ブログへ横展開する
- 今月の目標は、無料MCP公開と関連発信で10,000 impressions級の注目を狙うこと。小さな補助機能ではなく、SNSで説明した瞬間に使い道が伝わるものを優先する。

詳細な境界は [FREE_PAID_BOUNDARY.md](./FREE_PAID_BOUNDARY.md) を参照。

## Phase 3: alpha実装repoまたは同repo内prototype

方針:

- カタログrepoではまず候補と要件を整理する
- 実装が固まった候補は、prototypeとして追加するか、専用repoに分ける

判断基準:

- Issueが集まっている
- MVPが小さく作れる
- Agent Memories本体と混ぜても安全
- 非公開エンジン仕様を出さずに公開できる

## Phase 4: Agent Memoriesへの誘導

動線:

1. GitHubで候補を見る
2. Issueで要望を書く
3. 無料MCP/alphaを試す
4. よく使う設定や判断をAgent Memoriesに残す
5. 契約者向けの高度な連携へ進む

## Phase 5: Miraigentへの誘導

業務向けに変換できる候補は、Miraigentへつなぐ。

Miraigentへつなぐ条件:

- 公式APIや明確に許可された連携方法がある
- 規約準拠、承認フロー、履歴管理、安全運用として説明できる
- 企業が使っても信用・法務・誤投稿リスクを管理しやすい

Miraigentへ直接つなげないもの:

- APIなし/許可不明の自動投稿
- 利用者本人の判断と責任で使う実験ツール
- サービス側の仕様変更で壊れやすい投稿実行部分
- 非公式自動化を売りにするLP/料金表表現

これらは、Agent Memories / OSS無料ツール側で検証とIssue収集に使う。
表現は「各サービス規約・API許可範囲内で利用」「非公式自動化は販売対象外」に固定する。

例:

- SNS運用の事業導線化
- 問い合わせ対応
- CRM整理
- FAQ整備
- AI導入前の人間確認ルール

導線:

- Miraigent公開リソース: https://miraigent.com/resources
- Miraigent無料診断: https://miraigent.com/diagnosis
