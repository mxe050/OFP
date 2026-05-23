import { Lock } from 'lucide-react';
import { Chapter } from '../types';

export const expertDiscussionChapter: Chapter = {
  id: "chapter-expert-discussion",
  title: "予備室１（パスワード）",
  icon: <Lock className="w-5 h-5" />,
  password: "bms2026",
  subSections: [
    {
      id: "expert-discussion-full",
      title: "BMS（口腔灼熱痛症候群）の病態生理と薬物療法（2026年）",
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">
              【専門家会議 徹底解説】BMS（口腔灼熱痛症候群）の病態生理と薬物療法：痛覚変調性疼痛から最新の受容体標的（NMDA/D2）まで
            </h3>

            {/* 1. 疾患概念のパラダイムシフト */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                1. 疾患概念のパラダイムシフト：BMSは「神経障害性疼痛」か「痛覚変調性疼痛」か？
              </h4>
              
              <div className="mb-4">
                <h5 className="font-bold text-red-600 mb-2">【問題点】国際ガイドラインと最新の欧州知見との乖離</h5>
                <p className="text-gray-700 mb-2">
                  BMSの痛みの分類において、米国口腔顔面痛学会（AAOP）の2023年最新ガイドラインではBMSを「<strong>neuropathic pain（神経障害性疼痛）</strong>」に分類しています。
                </p>
                <p className="text-gray-700">
                  これに対し、I先生は「毎年の学術大会でもnociplastic painが取り上げられることがなく、非常に不自然な感じがしていました」と疑問を呈しました。
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">【論文のソース解説と専門家の議論】</h5>
                
                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-1">Svensson教授の論文からの提言（I先生の紹介）</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    I先生は、Svensson教授の論文『Could painful temporomandibular disorders be nociplastic in nature? A critical review and new proposal』（ACTA ODONTOLOGICA SCANDINAVICA, 2024）の記述を原文のまま紹介しました。
                  </p>
                  <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-600 text-sm mb-2">
                    「顎関節痛が痛覚変調性疼痛の一種である可能性についての議論は、他の慢性一次性口腔痛、例えば、持続性特発性歯痛/顔面痛、口腔灼熱痛症候群/障害などにも関連している。なぜなら、体性感覚異常や多くの場合感覚過敏がこれらの疾患と関連しているからである。」
                  </blockquote>
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-500 text-xs mb-2">
                    （原文：In fact, the discussion about TMD pain being a potential type of nociplastic pain is also relevant for other chronic primary orofacial pains, for example, persistent idiopathic dentoalveolar/facial pain, burning mouth syndrome/disorder because somatosensory abnormalities and most often hypersensitivity have been linked to these conditions [17, 30]。）
                  </blockquote>
                  <p className="text-gray-700 text-sm">
                    また、論文内では「痛覚変調性疼痛とcentral sensitization（中枢感作）の違い」についても解説されており、AAOPと欧州学派の考え方の違いが浮き彫りになっています。
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-1">Janet Travel博士の知見（W先生の補足）</h6>
                  <p className="text-gray-700 text-sm">
                    W先生は、デンマークのオースフの研究者達の論文を引き合いに出し、筋筋膜性TrP疼痛は基本的に「侵害受容性疼痛疾患」であり、神経障害性疼痛に分類されるべきではないが、「<strong>中枢感作と一致する特徴がある場合は痛覚変調性疼痛として分類でき、併存疾患として主に神経障害性または痛覚変調性疼痛疾患の一部となる可能性がある</strong>」と解説しました。これはJanet Travel博士が語った「持続因子が併存疾患を意味する場合、筋筋膜性疼痛に影響を与える持続因子を特定して治療する必要性」とまったく同じであると述べています。
                  </p>
                </div>

                <div>
                  <h6 className="font-bold text-indigo-700 mb-2">K先生による「痛覚変調性疼痛」の厳密な概念定義</h6>
                  <p className="text-gray-700 text-sm mb-2">K先生は、この議論に対し専門的な軌道修正を行いました。</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-3">
                    <li><strong>Nociceptive pain（侵害受容性疼痛）：</strong> 侵害受容器が興奮し、その目的のための神経機構の「正常な機能として痛みが生じる」という機構・活動に起因して痛みが生じる。</li>
                    <li><strong>Neuropathic pain（神経障害性疼痛）：</strong> 体性神経系に生じた病態や疾病が、「正常ではない活動を生じて、それが脳に正常ではない活動を起こして痛みが生じる」という機構・活動に起因して痛みが生じる。</li>
                    <li><strong>Nociplastic pain（痛覚変調性疼痛）：</strong> これらの2つの機構では（神経学的にも生理学的にも）説明できない痛みであり、「その成因には、通常、痛みという機能に関与しているさまざまな機構のなんらかの可塑的な変化が想定される」という考えである。</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    K先生は、「痛覚変調性疼痛の代表的な疾患」という表現は不正確であり、「もし、その患者が痛みを訴えるとしたら、痛覚変調性疼痛の機序で生じている、と考えるのが最も妥当であるような代表的な疾患」と考えるべきだと厳密に定義しました。
                  </p>
                </div>
              </div>
            </section>

            {/* 2. 圧倒的な性差の謎 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                2. 圧倒的な性差の謎：女性ホルモンと脳内ネットワークの分子メカニズム
              </h4>
              
              <div className="mb-4">
                <h5 className="font-bold text-red-600 mb-2">【問題点】なぜBMSは特発性口腔顔面痛の中で女性に突出して多いのか？</h5>
                <p className="text-gray-700">
                  Wk先生は、国際口腔顔面痛分類（ICOP）のカテゴリー6「特発性口腔顔面痛（idiopathic orofacial pain）」には明らかに性差が存在し、女性で罹患率が高い理由について、基礎研究の論文ソースを詳述しました。
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">【論文のソース解説と専門家の議論】</h5>
                
                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-2">エストロゲンの2つの経路とTRPV1（Cho T, 2012 等）</h6>
                  <p className="text-gray-700 text-sm mb-2">Wk先生が紹介した記事によれば、性ホルモンは以下の2つの経路で疼痛受容体「TRPV1」を増加させます。</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-2">
                    <li><strong>古典的ゲノム経路：</strong> 脂溶性のエストロゲンが核膜を通過し、エストロゲン受容体（ERαおよびERβ）と結合して遺伝情報を活性化し、TRPV1の遺伝子発現を増加させる。</li>
                    <li><strong>非ゲノム経路：</strong> 細胞質にあるエストロゲン受容体に作用し、TRPV1受容体遺伝子のプロモーターに作用してTRPV1が増産される。</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    これらは脊髄後根神経節（DRG）だけでなく、口腔顔面の情報を伝える「三叉神経節（TG）」の神経細胞でも認められ、エストロゲンが増えると口腔顔面領域で疼痛が伝わりやすくなります。
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-1">プロラクチンの性特異的疼痛関与（Stratton H et al., 2024）</h6>
                  <p className="text-gray-700 text-sm">
                    乳汁分泌を促すプロラクチンも疼痛形成に関与します。最新の研究『Nociceptors are functionally male or female: from mouse to monkey to man』によれば、DRGやTGの神経細胞の表面にプロラクチン受容体が発現するのは「<strong>メスのマウスだけ</strong>」であり、分泌されるとメスの神経細胞だけ活性化し、最終的にTRPV1遺伝子発現を増やすと実証されています。
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-1">脳の神経ネットワークの性差（Kurokawa R et al., 2021 / Xu Q et al., 2024）</h6>
                  <p className="text-gray-700 text-sm">
                    慢性口腔顔面痛の女性患者の脳機能画像検査では、健常者と比べて「<strong>前帯状皮質、内側前頭前皮質、基底核、視床、扁桃体との間に強い接続性が認められた</strong>」と報告されています。また、基底核のドパミン神経系からのオピオイド系が、エストロゲンのゲノム経路と非ゲノム経路の両方を介して、女性特有の疼痛処理系を形成している可能性が示唆されています。
                  </p>
                </div>

                <div>
                  <h6 className="font-bold text-indigo-700 mb-1">疫学との差異（Wk先生の疑問）</h6>
                  <p className="text-gray-700 text-sm">
                    Wk先生は、「女性の生殖年齢は、おおよそ10代後半か40代後半ですが、慢性疼痛の好発年齢は更年期（40代後半〜50代後半）と差異があります」と指摘し、ホルモンが豊富な若年者よりも中高年女性に多い理由として「<strong>心理社会的要因が大きいのではないか</strong>」と考察しました。
                  </p>
                </div>
              </div>
            </section>

            {/* 3. エビデンスの虚実 */}
            <section className="mb-8">
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                3. エビデンスの虚実：クロナゼパムの「有効性」を統計と原著論文から読み解く
              </h4>
              
              <div className="mb-4">
                <h5 className="font-bold text-red-600 mb-2">【問題点】「統計的な有意差」は「臨床的な痛みの消失」を意味しない</h5>
                <p className="text-gray-700">
                  BMSの治療薬として頻繁に議論されるクロナゼパムについて、S先生の保険適用に関する質問（歯科医師は原則処方不可という現実）を皮切りに、論文上のエビデンスに対する極めて厳しい統計学的・臨床的な検証が行われました。
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">【論文のソース解説と専門家の議論】</h5>
                
                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-2">メタアナリシスによる有効性の提示（W先生の紹介）</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    W先生は、『A systematic review of treatment for patients with burning mouth syndrome』（Cephalalgia. 2021）の詳細なデータを原文のまま紹介しました。
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li><strong>短期（2か月）：</strong> クロナゼパム0.5 mgの経口全身投与で、疼痛スコアの減少という好ましい結果が得られたものの、SMD（標準化平均差）解析では「<strong>統計的に有意な改善は得られませんでした</strong>（SMD −0.63、95% CI −1.56～0.29）」と記載されています。味覚（p = 0.83）および唾液流量に関してもプラセボ群と統計的に有意な改善差は認められず、ZMS気分スコアやBDIうつ病スコアも改善しませんでした。</li>
                    <li><strong>長期（4か月と6か月）：</strong> 2mgの投与は4ヶ月時点でVASスコアを有意に低下させたと報告（MD −4.1、p &lt; 0.001）されていますが、25人中8人にめまい、一過性の下痢、筋肉痛などの副作用が発現しました。局所塗布では、6か月間のクロナゼパムうがいにより疼痛スコアが13分の1に統計的に有意に減少したとされています（RR 13.0, 95% CI 3.35～50.39）。</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-2">Heckman（2011/2012）の二重盲検試験の精読（W先生）</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    Wt先生から提供されたHeckmanの論文『A double-blind study on clonazepam in patients with burning mouth syndrome』の本文を、W先生が詳細に読み込みました。
                  </p>
                  <p className="text-gray-700 text-sm">
                    患者は空腹時に1日1回0.5mgのクロナゼパムを9週間経口投与されました。薬剤は、Zerssen気分スコア（F[4,68] = 0.77; P = 0.55）またはBDIスコア（F[4,72] = 0.75; P = 0.56）に有意な影響を及ぼさず、心理状態に重大な変化を引き起こしませんでした。味覚テストや唾液流量もセッションごとに増加したものの、群間差は認められませんでした（P = .83 および P = 0.06）。しかし、「<strong>痛みの評価はセッションごとに有意に変化しました</strong>（F [4,72] = 16.8; P &lt; .001）。これらの変化は、クロナゼパムを投与された患者においてプラセボ群に比べてはるかに顕著でした（F [4,72] = 3.11; P = .011）」と結論づけられています。
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-2">I先生による原点論文の臨床的限界の指摘</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    I先生は、最初にクロナゼパム含嗽の効果を報告したフランスのWodaらの論文『Topical clonazepam in stomatodynia: a randomized placebo-controlled study』（Pain, 2004）を読み直しました。
                  </p>
                  <p className="text-gray-700 text-sm">
                    トライアルを完了した22名中、「著効(NSスコアが4～7単位減少)が9名＋有効７(が2～3単位減少)名、６名は無効か悪化」という結果であり、<strong>疼痛完全消失は5名に留まりました</strong>。I先生は、「NSスコアを見れば統計的に有意差ありだが、臨床的には患者が納得しないレベルだと思います」と鋭く指摘し、「NSスコアが2-3下がって数字で有意差が出たとしても、まだ痛みが3-4以上もあれば患者は喜んでくれません」と述べています。
                  </p>
                </div>

                <div>
                  <h6 className="font-bold text-indigo-700 mb-2">Y先生による「相対リスク（RR）」と「絶対効果」の統計学的宣告</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    統計に明るいY先生は、これらのメタ分析に対して「症例数が少なすぎる（ダメダメレベルに少なすぎ）」と一蹴し、「エビデンスの確実性は非常に低」と宣告しました。
                  </p>
                  <p className="text-gray-700 text-sm mb-2">Y先生はさらに、論文の「Relative Risk（RR：相対リスク）」の罠を解説しました。</p>
                  <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-700 text-sm mb-2 bg-indigo-50/50 py-2">
                    「ベースラインリスク10％（標準薬B薬で1000人中100人が改善）の状況下でRRが2のA薬を使えば、1000人中200人が改善（100人のプラス）」となりますが、「ベースラインリスクが1％の疾患（B薬で1000人中10人が改善）の状況下でRRが2のA薬を使っても、1000人中200人ではなく、10人の利益しかありません」
                  </blockquote>
                  <p className="text-gray-700 text-sm">
                    Y先生は、「RRという相対効果ではわかりません。よって、ベースラインリスクを考えてから、<strong>絶対効果で評価する必要があります</strong>」と、臨床的実感と論文の数値の乖離を完全に論理で証明しました。
                  </p>
                </div>
              </div>
            </section>

            {/* 4. BMSの3つの病態サブクラス */}
            <section>
              <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
                4. BMSの3つの病態サブクラスと最新の受容体標的（NMDA/D2受容体）
              </h4>
              
              <div className="mb-4">
                <h5 className="font-bold text-red-600 mb-2">【問題点】クロナゼパムが第一選択薬とならない場合の戦略</h5>
                <p className="text-gray-700 mb-2">
                  Kr先生の「クロナゼパムが使えない場合の代替案」という質問に対し、W先生はBMSが単一の病態ではない（ヘテロtype）ことを説明し、3つのメカニズムを提示しました。
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>舌神経の暴走：</strong> 鼓索神経の障害で舌神経の機能を抑制できない状況。代替薬としてカルバマゼピン（ナトリウムチャネルブロック）の可能性。</li>
                  <li><strong>末梢の強発現：</strong> 生検で判明した、小径神経線維が少なくなり末端でTRPV1が強発現している状況。カプサイシンが考えられるがリバウンドの可能性あり。</li>
                  <li><strong>中枢感作：</strong> 末梢からの刺激やストレスにより、C線維のワインドアップや中枢性の機能異常で中枢感作が生じている状態。トリプタノール、プレガバリン、サインバルタ等が効く可能性あり。</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">【論文のソース解説と未来の治療戦略】</h5>
                
                <div className="mb-4">
                  <h6 className="font-bold text-indigo-700 mb-2">Satu K. Jääskeläinenの提唱する病態生理学（2012, 2017, 2018）</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    W先生は、BMSの原因論の根幹をなすJääskeläinenの論文を複数紹介しました。
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
                    <li>
                      <strong>『Pathophysiology of primary burning mouth syndrome』（2012）</strong>では、BMSには神経生理学的に次の3つの異なるサブクラスが特徴付けられています。「(i) 末梢小径神経障害、(ii) 潜在性の主要三叉神経神経障害、(iii)ドーパミン作動性トップダウン抑制の欠陥に関連する可能性のある中枢性疼痛」。
                    </li>
                    <li>
                      <strong>『Burning mouth syndrome』（Cephalalgia. 2017）</strong>では、心理的要因や性格特性はBMSの直接的な原因とは考えられないが、症状を永続させる可能性があり、「BMSに関連するほとんどの精神疾患および人格障害に共通して脳内ドーパミン緊張が低い」と指摘しています。
                    </li>
                    <li>
                      <strong>『Is burning mouth syndrome a neuropathic pain condition?』（2018）</strong>では、末梢型は局所治療に反応するが、中枢型は局所治療に反応せず、中枢神経系内の抑制機能低下の徴候（脳幹反射の慣れの欠如、線条体ドパミン機能不全を示唆するPET所見）を示すとしています。そして、「閉経期に典型的な神経保護性性腺ホルモンの減少とストレスホルモンレベルの上昇という状況下で、特に脆弱な小神経線維と基底核に影響を及ぼす神経毒性因子によって引き起こされる神経系損傷の結果として誘発される」という強力な仮説を提唱しました。
                    </li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-bold text-indigo-700 mb-2">日本のリアルワールドデータとNMDA / D2受容体（T先生・Ng先生、2025）</h6>
                  <p className="text-gray-700 text-sm mb-2">
                    W先生は最後に、T先生らによる『Real-World Prescribing Patterns and Treatment Continuation of Amitriptyline Monotherapy and Aripiprazole Augmentation for Medically Unexplained Oral Symptoms/Syndromes in Japan』（Pharmaceuticals, 2025）を紹介しました。これは医学的に説明のつかない口腔症状・症候群（MUOS）に対する抗うつ薬（トリプタノール）およびドパミン受容体部分作動薬（エビリファイ等）のリアルワールド処方パターンを調査したものです。
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    その理論的背景となるNg先生のレビュー論文『Potential Target Receptors for the Pharmacotherapy of Burning Mouth Syndrome』（2025）では、感覚伝達亢進のメカニズムではTRPV1、P2X3、CB2などがターゲットとして示唆されるものの、BMSの女性に多い特徴を考慮すると「<strong>中枢疼痛処理の変化に関わるメカニズムが最も重要</strong>」であると結論づけています。
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    研究によると、報酬関連脳領域におけるグルタミン酸伝達と可塑性には男女で大きな差があり、「<strong>N-メチル-D-アスパラギン酸（NMDA）受容体が主要な治療標的</strong>」であることを示唆しています。また、「<strong>ドーパミンD2受容体機能の低下は、BMSの病理に寄与している</strong>」と考えられています。
                  </p>
                  <div className="bg-indigo-100 p-3 rounded-md border-l-4 border-indigo-500 mt-3">
                    <p className="text-indigo-900 text-sm font-medium">
                      結論として、「効果的な治療戦略は、これらの特定のシステムを調節すること、すなわち<strong>NMDA受容体の過活動を直接的または間接的に抑制し、D2受容体の機能低下に対処すること</strong>を目指すべきです」と締めくくられており、これが今後のBMS治療における最大のブレイクスルーとなる可能性を示唆しています。
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      )
    },
    {
      id: "expert-discussion-beginner",
      title: "初心者向け解説",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-indigo-900 mb-6 border-b-2 border-indigo-100 pb-2">
              専門家の議論をわかりやすく解説！
            </h3>
            
            <p className="text-gray-700 mb-6">
              前のページで紹介した専門家会議の内容は、少し専門用語が多くて難しかったかもしれません。ここでは、その議論の<strong>「4つの重要なポイント」</strong>を、初心者の方にもわかりやすく噛み砕いて解説します。
            </p>

            {/* 添付の図を挿入する場所 */}
            <div className="mb-8">
              <img 
                src="bms-diagram.png" 
                alt="口腔灼熱痛症候群（BMS）の病態生理と治療：診断から次世代戦略への4ステップ" 
                className="w-full rounded-lg shadow-md border border-gray-200"
                referrerPolicy="no-referrer"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">※添付いただいた図解</p>
            </div>

            <div className="space-y-6">
              {/* ポイント1 */}
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h4 className="text-lg font-bold text-blue-900 mb-2 flex items-center">
                  <span className="bg-blue-200 text-blue-800 w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-2">1</span>
                  BMSの痛みは「脳の勘違い」も混ざっている
                </h4>
                <p className="text-gray-700">
                  BMSの痛みは、単に「舌の神経が傷ついている（神経障害性疼痛）」だけではありません。ストレスや様々な要因で、<strong>脳が痛みを過敏に感じ取ってしまう「痛覚変調性疼痛（つうかくへんちょうせいとうつう）」</strong>という状態が複雑に絡み合っていることが分かってきました。つまり、舌そのものだけでなく、脳の痛みの感じ方にもアプローチする必要があります。
                </p>
              </div>

              {/* ポイント2 */}
              <div className="bg-pink-50 p-5 rounded-lg border border-pink-100">
                <h4 className="text-lg font-bold text-pink-900 mb-2 flex items-center">
                  <span className="bg-pink-200 text-pink-800 w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-2">2</span>
                  なぜ女性に多いの？ホルモンが痛みのスイッチを押すから
                </h4>
                <p className="text-gray-700">
                  BMSが圧倒的に女性に多い理由は、<strong>「女性ホルモン（エストロゲン）」や「プロラクチン」といったホルモンが、痛みのセンサー（TRPV1）を敏感にしてしまう</strong>からです。さらに、女性特有の脳のネットワークの働き方も関係しており、更年期などのホルモンバランスの変化や心理的なストレスが引き金になりやすいと考えられています。
                </p>
              </div>

              {/* ポイント3 */}
              <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
                <h4 className="text-lg font-bold text-yellow-900 mb-2 flex items-center">
                  <span className="bg-yellow-200 text-yellow-800 w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-2">3</span>
                  よく使われる薬（クロナゼパム）の本当の実力
                </h4>
                <p className="text-gray-700">
                  BMSの治療でよく「クロナゼパム」という薬が使われます。論文のデータ上は「効果がある（統計的に意味がある）」とされていますが、専門家が詳しくデータを読み解くと、<strong>「痛みが完全にゼロになるわけではなく、患者さんが本当に満足するレベルまで痛みが消える人は少ない」</strong>という厳しい現実が浮き彫りになりました。数字のマジックに惑わされず、実際の効果を冷静に見る必要があります。
                </p>
              </div>

              {/* ポイント4 */}
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h4 className="text-lg font-bold text-green-900 mb-2 flex items-center">
                  <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full inline-flex items-center justify-center text-sm mr-2">4</span>
                  未来の治療の鍵は「NMDA受容体」と「ドパミン」
                </h4>
                <p className="text-gray-700">
                  クロナゼパムが効かない場合、どうすればいいのでしょうか？最新の研究では、BMSの根本的な原因として「脳内の痛みを抑えるシステム（ドパミンなど）の働きが落ちていること」が注目されています。今後は、<strong>過剰な痛みの信号をブロックする「NMDA受容体」や、痛みを抑える力を高める「D2受容体」をターゲットにした新しい薬の使い方が、治療の大きな突破口（ブレイクスルー）になる</strong>と期待されています。
                </p>
              </div>
            </div>

          </div>
        </div>
      )
    }
  ]
};
