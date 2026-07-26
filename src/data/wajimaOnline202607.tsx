import type { ReactNode } from 'react';

function Emphasis({
  title,
  children,
  tone = 'cyan',
}: {
  title: string;
  children: ReactNode;
  tone?: 'cyan' | 'amber' | 'emerald' | 'rose';
}) {
  const styles = {
    cyan: 'border-cyan-200 bg-cyan-50 text-cyan-950',
    amber: 'border-amber-200 bg-amber-50 text-amber-950',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-950',
    rose: 'border-rose-200 bg-rose-50 text-rose-950',
  };

  return (
    <div className={`rounded-lg border p-4 text-sm leading-relaxed ${styles[tone]}`}>
      <p className="mb-1 font-bold">{title}</p>
      {children}
    </div>
  );
}

function SectionTitle({ number, children }: { number: number; children: ReactNode }) {
  return (
    <h4 className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-3 text-lg font-bold text-slate-900">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-xs text-white">
        {number}
      </span>
      <span>{children}</span>
    </h4>
  );
}

const wajimaOnline202607Content = (
  <div className="space-y-8">
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-7">
      <header className="mb-8 border-b-2 border-cyan-100 pb-5">
        <p className="mb-2 text-xs font-bold uppercase text-cyan-700">2026年7月 口腔顔面痛 On-line セミナー</p>
        <h3 className="text-xl font-bold leading-relaxed text-slate-950 md:text-2xl">
          和嶋浩一先生：局所所見だけでは説明しにくい痛みと、患者を否定しない診察
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          添付動画「2026７月口腔顔面痛On-lineセミナー和嶋先生.mp4」（約1時間50分）を、
          講演の流れ、2症例、質疑応答、終盤の診察論に沿って再構成しました。自動文字起こしの誤変換は
          動画の文脈に照らして補正し、発言を逐語録にするのではなく、臨床で使える意味として詳しく解説しています。
        </p>
      </header>

      <div className="mb-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <Emphasis title="この講演の中心課題">
          <p>
            顎・歯・顔面の痛みがあるのに、関節運動、筋触診、感覚検査のどれを行っても患者の「いつもの痛み」を十分に再現できない。
            そのとき、患者の訴えを否定するのでも、局所治療を延々と続けるのでもなく、
            <strong>痛覚変調性疼痛、慢性重複疼痛、睡眠・認知・心理社会的背景まで視野を広げる</strong>ことが講演の主題です。
          </p>
        </Emphasis>
        <Emphasis title="終盤の最重要メッセージ" tone="amber">
          <p>
            正しい医学知識を伝えることは必要です。ただし、患者が話している途中で「それは違う」と訂正すると、
            正しい説明まで「否定された言葉」として届かなくなります。まず患者の説明を最後まで理解し、
            その後に検査所見に基づく別の見方を提示します。
          </p>
        </Emphasis>
      </div>

      <section className="mb-9">
        <SectionTitle number={1}>講演全体の見取り図</SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-200 px-3 py-2">およその時間</th>
                <th className="border border-slate-200 px-3 py-2">内容</th>
                <th className="border border-slate-200 px-3 py-2">臨床での意味</th>
              </tr>
            </thead>
            <tbody className="leading-relaxed text-slate-700">
              <tr>
                <td className="border border-slate-200 px-3 py-2">00:00-00:18</td>
                <td className="border border-slate-200 px-3 py-2">TMD研究の変化、DC/TMDの二軸、OPPERA研究、学会報告、SAPHO症候群の症例</td>
                <td className="border border-slate-200 px-3 py-2">局所診断だけで完結しない患者群がいることを確認する</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">00:18-00:25</td>
                <td className="border border-slate-200 px-3 py-2">症例1：歯・顎の痛みから全身痛、線維筋痛症、慢性重複疼痛へ</td>
                <td className="border border-slate-200 px-3 py-2">経過の中で診断仮説を更新する</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">00:25-00:40</td>
                <td className="border border-slate-200 px-3 py-2">症例2：眼鏡やマスクが使えない側頭部痛、長期の咬合治療、痛覚変調</td>
                <td className="border border-slate-200 px-3 py-2">痛みの場所と原因の場所を短絡させない</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">00:40-01:15</td>
                <td className="border border-slate-200 px-3 py-2">診察の不一致、全身問診、歯科心身症、感覚過敏、発達特性をめぐる討議</td>
                <td className="border border-slate-200 px-3 py-2">曖昧なラベルより、現象を二軸で具体的に評価する</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">01:15-01:38</td>
                <td className="border border-slate-200 px-3 py-2">CSIの限界、アロディニア、心理支援、診療時間、biopsychosocial model</td>
                <td className="border border-slate-200 px-3 py-2">尺度は診断そのものではなく、診療は身体面の除外と心理社会面の評価を両立する</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="border border-amber-200 px-3 py-2 font-bold">01:38-01:50</td>
                <td className="border border-amber-200 px-3 py-2 font-bold">患者の話を否定しない、正しさを急いで押しつけない、関係を作って説明モデルを更新する</td>
                <td className="border border-amber-200 px-3 py-2 font-bold">本ページで最も重視する診察技法</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={2}>TMDを「3つの患者群」として見直す</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            導入では、非復位性関節円板転位に対して、かつては手術や咬合再構成が必要と考えられた時代から、
            痛みを抑え、筋緊張を緩和し、自然経過を尊重する保存的治療へ移った歴史が語られます。
            長期的には開口障害や痛みが改善する患者が多いという研究が、不可逆的治療を減らす方向を支えました。
          </p>
          <p>
            そのうえでDC/TMDは、筋痛・関節痛・円板転位・TMD関連頭痛などを診る
            <strong>Axis I（身体的診断）</strong>と、疼痛による生活障害、心理的苦痛、全身の痛みなどを診る
            <strong>Axis II（心理社会的評価）</strong>の二軸で理解する必要があると強調されます。
            Axis IIは「身体に原因がない患者を精神科へ送るための軸」ではありません。身体診察と並行して、
            痛みが患者の生活全体でどう働いているかを捉える軸です。
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h5 className="font-bold text-emerald-950">1. 自然軽快型</h5>
              <p className="mt-2">一過性で、負担軽減や説明、セルフケアを中心に改善しやすい。</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h5 className="font-bold text-amber-950">2. 痛み過敏型</h5>
              <p className="mt-2">刺激に対する痛み反応が強く、局所所見だけでは症状の強さを説明しにくい。</p>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <h5 className="font-bold text-rose-950">3. 全身症状併存型</h5>
              <p className="mt-2">全身痛、睡眠、消化器症状などと重なり、TMDが全体像の一部になっている。</p>
            </div>
          </div>
          <p>
            講演で紹介されたOPPERA研究からの見通しは、TMDを単一の病気として扱わず、上のような異なる経過をとる群として考えることです。
            第2・第3群では、歯科的な局所処置だけで解決しようとせず、疼痛医療、内科、精神科・心療内科、心理職などとの
            <strong>チームアプローチ</strong>が必要になります。
          </p>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={3}>症例1：歯と顎の痛みから、全身の重複疼痛が見えてくる</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4">
              <h5 className="mb-2 font-bold text-slate-900">初診時</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>38歳女性。歯科治療後、複数の上下顎臼歯、顎、首、肩に痛み。</li>
                <li>顔面・口腔内の感覚検査では明瞭な異常を認めない。</li>
                <li>咬筋などの筋所見があり、まず筋筋膜性疼痛としてセルフケアとストレッチを開始。</li>
                <li>スプリントは、使用時と中止時を比べ、本人に利益がある場合のみ継続する方針。</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h5 className="mb-2 font-bold text-slate-900">経過中に増えた情報</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>手指・腕の痛みが強く、重い物やスマートフォンを持ちにくい。</li>
                <li>中途覚醒、起床時の全身のこわばり、食欲低下。</li>
                <li>歯・顎の局所対応をしても「本来困っている痛み」が十分には改善しない。</li>
                <li>全身痛が進行し、最終的に線維筋痛症と診断された。</li>
              </ul>
            </div>
          </div>
          <p>
            後から詳しく聴き直すと、過敏性腸症候群を思わせる症状、腰痛、機能性ディスペプシア、子宮内膜症、頭痛など、
            複数の慢性疼痛・機能性症状が重なっていました。これは
            <strong>chronic overlapping pain conditions（COPCs：慢性重複疼痛状態）</strong>として理解しやすい全体像です。
          </p>
          <Emphasis title="この症例から学ぶ診断の更新" tone="emerald">
            <p>
              初診時の筋痛診断が直ちに誤りだったという話ではありません。実際に筋痛は存在し、治療対象になります。
              しかし、筋痛が軽くなっても患者の中心的な苦痛が残るなら、「治療抵抗性の筋痛」と決めつけず、
              <strong>最初の仮説では説明できない情報が増えた</strong>と考えます。診断は一度付けて終わるラベルではなく、経過とともに更新する作業です。
            </p>
          </Emphasis>
          <p className="text-xs text-slate-500">
            動画ではプレガバリン、デュロキセチン、三環系抗うつ薬などの使用経過が紹介されます。これは症例の記録であり、
            個々の患者への処方推奨ではありません。適応、用量、副作用、併存疾患、他科との連携を含む個別判断が必要です。
          </p>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={4}>症例2：眼鏡・マスクが使えない痛みと、局所治療の限界</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            42歳男性。両側の側頭部から耳周囲に非常に強い痛み・締め付け感があり、眼鏡のつるやマスクのひもを耳に掛けられませんでした。
            眼鏡を短く加工し、マスクには後頭部で支えるバンドを付けるほど、日常生活上の刺激を避けていました。
            初診時の痛みはVAS 95と極めて強い一方、口腔・顔面の感覚検査では、症状の広がりと強さを説明する一貫した局所神経所見が乏しい状態でした。
          </p>
          <p>
            側頭筋・咬筋の筋痛や慢性緊張型頭痛の要素はありましたが、それだけでは患者が訴える全体像を再現できません。
            さらに、長期間にわたり、クラウン交換、咬合高径の変更、全顎的な暫間補綴など、大規模な咬合治療を繰り返していました。
            500万円を前払いした治療契約も紹介され、症状機序と合わない不可逆的治療へ患者が巻き込まれる危険が示されます。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
              <h5 className="mb-2 font-bold text-cyan-950">改善した点</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>精神科と連携した薬物療法を継続。</li>
                <li>VASは約3年で95から30程度へ低下。</li>
                <li>通常の眼鏡やマスクを使えるようになった。</li>
                <li>休日は症状が軽く、仕事時の緊張で悪化する関連が明確になった。</li>
              </ul>
            </div>
            <div className="rounded-lg border border-violet-200 bg-violet-50 p-4">
              <h5 className="mb-2 font-bold text-violet-950">なお評価が必要な点</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>記憶力・認知力の低下という本人の訴え。</li>
                <li>睡眠、腹部症状、光・音など他感覚の過敏。</li>
                <li>仕事場面で続く緊張と締め付け感。</li>
                <li>薬剤の影響と、薬剤開始前からあった症状の時間関係。</li>
              </ul>
            </div>
          </div>
          <p>
            認知機能の訴えを薬の副作用と即断しない点も重要です。初診時の問診票を見直すと、薬物療法開始前から短期記憶の低下を訴えていました。
            「薬を飲んでいるから」「心理的だから」と原因を一つに固定せず、症状がいつから存在したかを記録に戻って確認します。
          </p>
          <Emphasis title="局所処置を止める判断も治療である" tone="rose">
            <p>
              痛む場所に歯や咬合接触があることと、それが痛みの維持原因であることは同じではありません。
              局所所見が症状を再現せず、広い感覚過敏や睡眠・認知・全身症状を伴うとき、さらに歯を削ることは診断の精度を上げず、
              新たな侵襲と不安を加える可能性があります。
            </p>
          </Emphasis>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={5}>「何となく違う」を、診察可能な情報に変える</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            和嶋先生は、局所の診察をしても患者の訴えを「これです」と再現できないときの違和感を語ります。
            ここで大切なのは、直感的な「怪しい」で終わらせず、どこが一致しないのかを分解することです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2">診察項目</th>
                  <th className="border border-slate-200 px-3 py-2">通常確認したいこと</th>
                  <th className="border border-slate-200 px-3 py-2">不一致のサイン</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-bold">関節</td>
                  <td className="border border-slate-200 px-3 py-2">運動・負荷でいつもの関節痛が再現されるか</td>
                  <td className="border border-slate-200 px-3 py-2">動かしても主訴の痛みが出ない</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-bold">筋</td>
                  <td className="border border-slate-200 px-3 py-2">触診や収縮でいつもの痛みが再現されるか</td>
                  <td className="border border-slate-200 px-3 py-2">圧痛はあるが、患者の中心症状とは別物</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-bold">感覚</td>
                  <td className="border border-slate-200 px-3 py-2">触覚・痛覚変化が神経解剖学的分布と合うか</td>
                  <td className="border border-slate-200 px-3 py-2">症状範囲と感覚所見が合わない、左右や複数領域にまたがる</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-bold">経過</td>
                  <td className="border border-slate-200 px-3 py-2">標的治療に応じて中心症状も改善するか</td>
                  <td className="border border-slate-200 px-3 py-2">局所所見は改善しても、本人の苦痛はほぼ変わらない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            不一致があれば、下痢と便秘の反復、胃部不快感、腰痛、首・肩・背部痛、頭痛、骨盤痛、睡眠障害、起床時のこわばり、
            疲労、記憶・集中、光・音・触覚への過敏などへ問診を広げます。ボディマップを使い、痛みの分布を患者自身に描いてもらうことも有用です。
          </p>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={6}>侵害受容性・神経障害性・痛覚変調性を混同しない</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <h5 className="font-bold text-slate-900">侵害受容性疼痛</h5>
              <p className="mt-2">炎症や機械的負荷など、組織の侵害刺激に対応した痛み。局所診察で主訴が再現しやすい。</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h5 className="font-bold text-slate-900">神経障害性疼痛</h5>
              <p className="mt-2">体性感覚神経系の病変・疾患による痛み。病歴、感覚異常、神経解剖学的に妥当な分布を対応させる。</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h5 className="font-bold text-slate-900">痛覚変調性疼痛</h5>
              <p className="mt-2">侵害受容の変調により生じる痛み。明確な組織損傷や神経病変だけでは強さ・広がり・持続を説明しにくい。</p>
            </div>
          </div>
          <p>
            アロディニアがあれば自動的に神経障害性疼痛になるわけではありません。神経障害性疼痛を考えるなら、
            発症契機となる神経損傷の可能性と、三叉神経各枝などの神経解剖学的に妥当な範囲が必要です。
            両側性で複数の神経領域をまたぎ、明瞭な損傷契機がなく、全身症状を伴う場合は、神経障害性疼痛だけでなく
            痛覚変調性疼痛や慢性重複疼痛も考えます。
          </p>
          <p>
            逆に、痛覚変調性疼痛にはアロディニアが必須というわけでもありません。症例1のように明瞭なアロディニアがなくても、
            全身痛、睡眠、疲労、こわばり、消化器症状などの組み合わせから全体像が見えることがあります。
          </p>
          <Emphasis title="重要な順序">
            <p>
              「説明できないから痛覚変調性」とするのではありません。まず危険な疾患、感染、腫瘍、炎症、歯原性疾患、
              顎関節・筋疾患、明確な神経障害を病歴と診察で検討します。そのうえで、局所病変だけでは説明できない
              痛みの増幅・持続・広がりを積極的に評価します。
            </p>
          </Emphasis>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={7}>COPCs、感覚過敏、発達特性をどう扱うか</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            COPCsは、線維筋痛症、過敏性腸症候群、慢性腰痛、頭痛、TMD、骨盤痛などが同一患者に重なりやすいという臨床的な見方です。
            「全部が一つの原因」という断定ではなく、共通する痛み増幅機序や心理社会的要因を考えるための枠組みです。
          </p>
          <p>
            質疑では、BMSとADHD、ASDにみられることがある感覚の鋭敏さ、味・光・衣服のタグ・診療時のタオルなどへの反応も話題になります。
            ただし、感覚過敏だけからADHDやASDを診断することはできません。個人差も大きく、症状はスペクトラム状です。
            歯科診療で重要なのはラベルを付けることではなく、照明、音、接触、口腔内装置など何が負担になるかを具体的に聴き、環境を調整することです。
          </p>
          <Emphasis title="生活上の行動は、感覚を理解する手掛かり" tone="emerald">
            <p>
              「まぶしくて顔にタオルを掛ける」「首にタオルが触れるのを嫌がる」「毎回同じ味の食品だけは食べられる」など、
              日常行動の具体例は、数値化しにくい感覚特性を理解する助けになります。ただし、一つの行動を一つの診断へ短絡させません。
            </p>
          </Emphasis>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={8}>「歯科心身症」という言葉を安易な説明にしない</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            中盤の長い討議では「歯科心身症」の定義の混乱が取り上げられます。本来の心身症は、
            身体疾患の発症や経過に心理社会的因子が密接に関与する病態を指し、単に「検査で異常がない」
            「訴えが理解しにくい」「精神疾患がある」と同義ではありません。
          </p>
          <p>
            うつ病、不安障害、統合失調症などの精神疾患に伴う身体症状と、心身症は定義上区別されます。
            一方、実臨床では器質的異常と機能的異常の境界も明瞭ではなく、名称だけで治療方針が決まるわけではありません。
            したがって、曖昧な総称を付けて思考を止めるより、身体所見、心理的苦痛、生活障害、併存疾患をそれぞれ記述し、
            Axis IとAxis IIの両方から対応することが実用的です。
          </p>
          <Emphasis title="患者に伝えてはいけない短絡" tone="rose">
            <p>
              「歯に異常がないから心の問題です」という説明は、診断としてもコミュニケーションとしても不十分です。
              痛みが実在することを認めたうえで、局所の危険な病変は見つからないこと、神経系の過敏化、睡眠、ストレス、
              注意、恐怖など複数の要素が痛みを維持しうることを、所見に沿って説明します。
            </p>
          </Emphasis>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={9}>CSIは「中枢感作の診断装置」ではない</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            終盤の質疑で、Central Sensitization Inventory（CSI）の扱いが明確に注意されます。
            CSIは、中枢感作そのものを直接測定したり、点数だけで痛覚変調性疼痛を診断したりする検査ではありません。
            中枢感作に関連するとされる多様な身体・心理症状を把握するための質問票です。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h5 className="mb-2 font-bold text-emerald-950">適切な使い方</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>患者が抱える症状の広がりを把握する。</li>
                <li>追加問診が必要な領域を見つける。</li>
                <li>他の病歴・診察・尺度と組み合わせる。</li>
                <li>治療前後の症状負担を補助的に追う。</li>
              </ul>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <h5 className="mb-2 font-bold text-rose-950">避ける使い方</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>カットオフ以上だから中枢感作と診断する。</li>
                <li>点数を「中枢感作の程度」とそのまま呼ぶ。</li>
                <li>局所疾患や神経障害の診察を省略する。</li>
                <li>高得点を患者の訴えが心理的である証拠にする。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={10}>終盤の核心：患者の説明を、途中で否定しない</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            慢性疼痛の患者は、長い受診歴の中で「異常なし」「気にしすぎ」「それは関係ない」と繰り返し言われていることがあります。
            さらにインターネットで自分の症状に合う情報を探し続け、特定の病気や咬合原因への確信を強める
            cyberchondriaの状態になることもあります。ここで診療者が正面から論破すると、患者は医学知識を学ぶ前に、
            また自分の経験を否定されたと受け取ります。
          </p>
          <p>
            講演で紹介される臨床心理士の姿勢は、患者の説明が医学的には不自然に聞こえても、話の途中で否定しないことです。
            まず「そう考えるに至った経緯」を最後まで聴きます。その後、患者の発言を直接打ち消す形ではなく、
            正しい一般知識や今回の検査から考えられる別の説明を提示します。
          </p>
          <Emphasis title="受容する対象と、同意する対象を分ける" tone="amber">
            <p>
              受容するのは、患者に痛みがあること、困っていること、その考えに至った経験です。
              「咬合が全身を壊している」など未確認の因果仮説に同意する必要はありません。
              <strong>経験の妥当性を認めることと、患者の病因仮説を事実として承認することは別です。</strong>
            </p>
          </Emphasis>
          <div className="rounded-lg border-2 border-amber-300 bg-amber-50 p-5">
            <h5 className="mb-3 text-base font-bold text-amber-950">「我慢する」の正確な意味</h5>
            <p className="text-amber-950">
              ここで診療者が我慢するのは、<strong>患者が話している途中で訂正したくなる衝動、正しい答えをすぐ説得したくなる衝動</strong>です。
              医学的に必要な情報を隠すことでも、誤情報に同意することでもありません。安全確認を済ませたうえで、
              まず患者の説明モデルを理解するまで、訂正のタイミングを少し待つという面接技法です。
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <h5 className="font-bold text-rose-950">我慢しないもの</h5>
              <p className="mt-2">緊急性の説明、危険な自己処置の中止、同意に必要なリスク説明、患者安全。</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h5 className="font-bold text-amber-950">一時的に我慢するもの</h5>
              <p className="mt-2">途中で遮ること、論破、診断名の即断、情報の大量提示、正しさの押しつけ。</p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h5 className="font-bold text-emerald-950">必ず行うこと</h5>
              <p className="mt-2">安全確認、経験の承認、所見の共有、代替説明、理解確認、共同の目標設定。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={11}>診察で実行する12ステップ</SectionTitle>
        <div className="space-y-3 text-sm leading-relaxed text-slate-700">
          {[
            ['1. まず安全を確認する', '感染、腫瘍、外傷、進行性神経症状、重篤な頭痛などのレッドフラッグを確認する。必要な検査・紹介を遅らせない。'],
            ['2. 局所の痛み源を系統的に診る', '歯、歯周組織、筋、顎関節、粘膜、神経を診察し、主訴の「いつもの痛み」が再現されるか確認する。'],
            ['3. 患者の説明モデルを尋ねる', '「何が原因だと考えていますか」「そう考えたきっかけは何ですか」と尋ねる。'],
            ['4. 今回求めている答えを確かめる', '診断名、画像検査、咬合調整、薬、安心、話を聞いてほしいなど、受診目的は患者ごとに異なる。'],
            ['5. 途中で訂正せず、最後まで聴く', '矛盾を感じてもすぐ反論せず、時間経過、受診歴、怖れていることを把握する。'],
            ['6. 感情と経験を言葉にして返す', '「長く続いて、原因が分からないことも不安だったのですね」と、苦痛と経緯を要約する。'],
            ['7. 承認と同意を分ける', '「痛みがあることは理解した」と伝える一方、未確認の因果関係は事実として認めない。'],
            ['8. 診察結果を透明に共有する', '見つかった所見、見つからなかった所見、まだ判断できない点を分けて説明する。'],
            ['9. 別の説明を“追加情報”として提示する', '「それは違う」ではなく、「今回の所見からは、こういう状態も考えられます」と選択肢を増やす。'],
            ['10. 患者自身に比較してもらう', '従来の説明と新しい説明のどちらが、症状の広がりや変動をよりよく説明できるか一緒に考える。'],
            ['11. 痛みゼロ以外の目標も合意する', '睡眠、食事、会話、仕事、外出など、回復したい機能とQOLを具体化する。'],
            ['12. 一度で変えようとせず再訪する', '長年かけて形成された理解は一回の説明では変わらない。関係を保ち、経過と反応を見ながら繰り返し更新する。'],
          ].map(([title, text]) => (
            <div key={title} className="grid gap-1 rounded-lg border border-slate-200 p-3 md:grid-cols-[210px_1fr] md:gap-4">
              <h5 className="font-bold text-slate-900">{title}</h5>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={12}>言葉の違いで、説明の届き方が変わる</SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-relaxed">
            <thead>
              <tr>
                <th className="border border-rose-200 bg-rose-50 px-3 py-2 text-rose-950">避けたい言い方</th>
                <th className="border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-950">置き換える言い方</th>
                <th className="border border-slate-200 bg-slate-100 px-3 py-2 text-slate-900">ねらい</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border border-slate-200 px-3 py-3">「それは違います。咬み合わせは関係ありません」</td>
                <td className="border border-slate-200 px-3 py-3">「咬み合わせが原因だと考えるようになった経緯を、もう少し教えてください」</td>
                <td className="border border-slate-200 px-3 py-3">まず説明モデルの成り立ちを知る</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-3">「異常ありません」</td>
                <td className="border border-slate-200 px-3 py-3">「危険な病気を示す所見は今のところありません。一方、痛みが続く仕組みは別に検討できます」</td>
                <td className="border border-slate-200 px-3 py-3">安心と継続評価を両立する</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-3">「気にしすぎです」</td>
                <td className="border border-slate-200 px-3 py-3">「痛みに注意が向き続けるほど、神経が警戒状態を保つことがあります」</td>
                <td className="border border-slate-200 px-3 py-3">責めずに維持機序を説明する</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-3">「精神的なものです」</td>
                <td className="border border-slate-200 px-3 py-3">「痛みは実在します。局所だけでなく、睡眠、緊張、神経の過敏さも一緒に診る必要があります」</td>
                <td className="border border-slate-200 px-3 py-3">身体対心理の二分法を避ける</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-3">「何度説明すれば分かりますか」</td>
                <td className="border border-slate-200 px-3 py-3">「今の説明で納得しにくい部分はどこでしょう。次回も経過と照らして確認しましょう」</td>
                <td className="border border-slate-200 px-3 py-3">理解を共同作業にする</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <Emphasis title="短い応答の使い方" tone="amber">
            <p>
              患者が話している最中の「そうなんですね」は、内容への同意ではなく「今、そのように理解していることを受け取りました」という合図です。
              その後に「検査ではこの所見があり、こういう可能性も考えられます」と続ければ、否定ではなく新しい情報として提示できます。
            </p>
          </Emphasis>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={13}>説明は一回の説得ではなく、理解を共同で更新する過程</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            患者の直感では「痛い場所に原因がある」が非常に強く、説明を理解したように見えても、翌日には局所原因の考えへ戻ることがあります。
            これは患者が不合理だからではありません。痛みは危険を知らせる感覚なので、局所を守ろうとする理解は自然です。
          </p>
          <p>
            長期間の治療、インターネット情報、医療者からの相反する説明によって形成された考えを、一回の正しい説明で上書きすることは困難です。
            まず関係を作り、診察所見と経過を共有し、セルフケアや活動調整を小さく試し、その結果を次回一緒に振り返ります。
            患者自身が「この説明のほうが自分の症状をよく説明する」と気づけることが理想です。
          </p>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
            <h5 className="mb-2 font-bold text-cyan-950">一診療ごとの小さな目標</h5>
            <ol className="list-decimal space-y-1 pl-5 text-cyan-950">
              <li>今日は患者の説明モデルを一つ理解する。</li>
              <li>危険な病態があるかを確認する。</li>
              <li>代替説明を一つだけ加える。</li>
              <li>試せる行動を一つ合意する。</li>
              <li>次回、症状だけでなく機能と生活の変化も確認する。</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={14}>心理支援、QOL目標、診療時間の現実</SectionTitle>
        <div className="space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            討議では、臨床心理士による認知行動療法を基盤とした自費カウンセリングも紹介されます。
            慢性TMDや口腔症状のNRSが大きく変わらなくても、不安・抑うつ、生活の質、症状への対処が改善する患者がいます。
            慢性疼痛では「痛みの数値が下がらないから治療失敗」とせず、活動、睡眠、仕事、家庭生活、自己効力感を評価します。
          </p>
          <p>
            一方、保険診療で一人に使える時間が短く、十分な聴取が難しい現実も率直に語られます。
            すべてを一回で聴くのではなく、初診で安全と主要仮説を確認し、複雑例を見分けて時間を確保する、
            別枠で再診する、心理職・他科へつなぐなどのトリアージが必要です。
          </p>
          <p>
            biopsychosocial modelは、身体面を軽視する言葉ではありません。むしろ歯科診療がbioへ偏りやすいとき、
            意識的にpsychologicalとsocialを前へ戻し、二軸を揃えるためのモデルです。
          </p>
        </div>
      </section>

      <section className="mb-9">
        <SectionTitle number={15}>初診・再診で使える実践チェックリスト</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700">
            <h5 className="mb-3 font-bold text-slate-900">初診で確認すること</h5>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>レッドフラッグと緊急性</li>
              <li>患者が指す痛みの場所と、いつもの痛みの再現</li>
              <li>発症契機、変動、増悪・軽減因子</li>
              <li>歯科治療歴と不可逆的処置への期待</li>
              <li>全身の痛みとボディマップ</li>
              <li>睡眠、疲労、認知、消化器・骨盤症状</li>
              <li>感覚過敏と診療環境上の配慮</li>
              <li>患者の原因理解、恐れている病気、欲しい答え</li>
              <li>仕事・家庭・経済面への影響</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-4 text-sm text-slate-700">
            <h5 className="mb-3 font-bold text-slate-900">再診で確認すること</h5>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>痛みの数値だけでなく、できるようになった行動</li>
              <li>局所治療の標的所見と中心症状が同時に変化したか</li>
              <li>薬剤開始前後の時間関係と副作用</li>
              <li>休日・仕事・睡眠など場面による変動</li>
              <li>患者の説明モデルがどう変化したか</li>
              <li>説明で否定されたと感じた部分がなかったか</li>
              <li>新しい全身症状、神経症状、レッドフラッグ</li>
              <li>他科・心理職との情報共有と役割分担</li>
              <li>次の小さな機能目標</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="rounded-lg border-l-4 border-cyan-600 bg-slate-100 p-5">
        <h4 className="mb-3 font-bold text-slate-950">Take-home messages</h4>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-800">
          <li>TMDには自然軽快型、痛み過敏型、全身症状併存型があり、全例を同じ局所治療で扱わない。</li>
          <li>Axis IとAxis IIは二者択一ではない。身体診察と心理社会的評価を同時に行う。</li>
          <li>関節・筋・感覚検査が患者の主訴と一致しないときは、全身痛、睡眠、認知、消化器症状まで問診を広げる。</li>
          <li>アロディニアだけで神経障害性疼痛と決めず、神経解剖学的分布と神経損傷の根拠を確認する。</li>
          <li>CSIは症状を把握する質問票であり、中枢感作や痛覚変調性疼痛を単独で診断する検査ではない。</li>
          <li>患者の痛みと経験を承認することは、患者の病因仮説に同意することではない。</li>
          <li>診療者が我慢するのは、患者の話を途中で訂正し、正しさを急いで説得したくなる衝動である。</li>
          <li>安全確認後は、まず説明モデルを理解し、検査に基づく別の見方を「追加情報」として提示する。</li>
          <li>長年の理解は一回では変わらない。関係を保ち、患者自身が納得できる形へ少しずつ更新する。</li>
          <li>複雑例は一人で抱えず、疼痛医療、内科、精神科・心療内科、心理職とのチームで支える。</li>
        </ol>
      </footer>
    </article>
  </div>
);

export { wajimaOnline202607Content };
