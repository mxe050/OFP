const gradeThresholdsContent = (
  <div className="space-y-8">
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="border-b-2 border-indigo-100 pb-4 mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
          INGUIDE Level 1 / M4 / 14. Cochrane Webinars Q&amp;A
        </p>
        <h3 className="text-xl font-bold text-indigo-900">
          Thresholds and rating the certainty of evidence using GRADE
        </h3>
        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
          Cochrane Learning Live の GRADE assessment of certainty of evidence series 第3回。2026年5月19日開催、Cochrane
          Training により2026年5月20日に公開された約56分の録画です。講義本編は 0:00 から、Q&amp;A は 45:37
          から始まります。講師は McMaster GRADE Centre Director の Assistant Professor Wojtek Wiercioch
          です。
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <a
            href="https://www.youtube.com/watch?v=M8V7dGyrgbQ"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-red-50 px-3 py-1 font-semibold text-red-700 hover:bg-red-100"
          >
            YouTube recording
          </a>
          <a
            href="https://www.cochrane.org/events/thresholds-and-rating-certainty-of-evidence-using-grade"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-50 px-3 py-1 font-semibold text-cyan-700 hover:bg-cyan-100"
          >
            Cochrane event page
          </a>
          <a
            href="https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-700 hover:bg-indigo-100"
          >
            Cochrane Handbook Ch.14
          </a>
        </div>
      </div>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          1. この講義の中心テーマ
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            この動画の核心は、GRADE の「確実性」を単なる高・中・低のラベルとして扱うのではなく、<strong>「真の効果が、あらかじめ決めた判断閾値のどちら側にあるとどれくらい確信できるか」</strong>として扱う点です。ここでいう threshold
            は、統計学の有意水準のような機械的な線ではありません。患者・臨床家・ガイドラインパネル・レビュー読者にとって「この差なら意思決定が変わる」と考えられる境界線です。
          </p>
          <p>
            Cochrane のイベント概要では、閾値は GRADE において所見の解釈を透明で再現可能にするために使われる、と説明されています。つまり、同じメタアナリシスの結果でも、ある人は「小さいが重要な利益」と感じ、別の人は「ほぼ差がない」と感じる、という曖昧さを減らすために、判断の境界を先に明示します。
          </p>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded">
            <p className="font-bold text-cyan-900 mb-1">一言でいうと</p>
            <p>
              GRADE の certainty rating は、効果推定値そのものの「見た目の大きさ」ではなく、<strong>効果の真の値が、臨床的に意味のある範囲に入るかどうかへの信頼度</strong>を表す。その信頼度を判断するために、先に thresholds を置く。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          2. なぜ thresholds が必要か
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            GRADE を使うとき、私たちは「介入 A は介入 B よりよいのか」「害はどの程度か」「推奨を出せるほど信頼できるか」を判断します。しかし、効果推定値には幅があります。たとえば死亡を 1,000人あたり 8人減らすという推定があったとして、それを「重要な利益」とみるか、「ほぼ無視できる差」とみるかは、アウトカムの重さ、患者の価値観、介入の負担、費用、代替手段によって変わります。
          </p>
          <p>
            そのため、講義では「thresholds は解釈のための物差し」として位置づけられます。点推定値と信頼区間をただ眺めるのではなく、<strong>無効果・些細な効果・小さい効果・中等度の効果・大きな効果</strong>など、判断が変わる境界を先に置き、結果がどの範囲に入るかを確認します。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-bold text-gray-800 mb-2">threshold なし</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>統計的有意かどうかに引っ張られる。</li>
                <li>同じ結果に対して解釈が人により揺れる。</li>
                <li>imprecision の downgrading が説明しにくい。</li>
                <li>SoF table の footnote が後付けに見える。</li>
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h5 className="font-bold text-emerald-900 mb-2">threshold あり</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>何を「重要」と呼ぶかが明示される。</li>
                <li>信頼区間が判断境界をまたぐか説明できる。</li>
                <li>レビュー間、評価者間で再現性が上がる。</li>
                <li>EtD framework で利益・害の大きさを議論しやすい。</li>
              </ul>
            </div>
          </div>
          <p>
            ここで重要なのは、threshold を「答えを作るための恣意的な線」として使わないことです。結果を見たあとに都合よく線を動かすと、GRADE の透明性は失われます。講義の実践的メッセージは、<strong>プロトコル段階、少なくとも SoF table を作る前に閾値を考え、根拠を残す</strong>という点にあります。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          3. GRADE の確実性を threshold で読み替える
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            従来の説明では、GRADE の4段階は「真の効果が推定値に近いとどれくらい確信できるか」と説明されます。この講義が強調する新しい読み方では、さらに一歩進めて、<strong>真の効果が、事前に指定した閾値の片側にある、または指定した効果範囲内にあるとどれくらい確信できるか</strong>を問います。
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50 text-left text-xs font-bold uppercase tracking-wider text-gray-600">
                <tr>
                  <th className="px-4 py-3">Certainty</th>
                  <th className="px-4 py-3">threshold を使った読み方</th>
                  <th className="px-4 py-3">実務上の含意</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-bold text-indigo-800">High</td>
                  <td className="px-4 py-3">真の効果が指定した範囲にある、または閾値の同じ側にあると非常に確信できる。</td>
                  <td className="px-4 py-3">解釈は安定しており、追加研究で判断が変わりにくい。</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-indigo-800">Moderate</td>
                  <td className="px-4 py-3">おそらく同じ側・同じ範囲にあるが、違う可能性も残る。</td>
                  <td className="px-4 py-3">推奨や結論は可能だが、不確実性を明記する。</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-indigo-800">Low</td>
                  <td className="px-4 py-3">真の効果がどの範囲にあるかへの信頼は限られる。</td>
                  <td className="px-4 py-3">「効果がありそう」と言い切らず、重要な反対方向の可能性を残す。</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-indigo-800">Very low</td>
                  <td className="px-4 py-3">真の効果がどの範囲にあるか、ほとんど確信できない。</td>
                  <td className="px-4 py-3">結論は仮説的。推定値よりも不確実性が主メッセージになる。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            この読み替えにより、GRADE の判断は「推定値が何%か」から、「その推定値と不確実性の幅が、意思決定に重要な境界とどう関係するか」に変わります。したがって、confidence interval
            は単なる統計的精度の表示ではなく、<strong>threshold をまたいでいるか、またぐならどの重要な判断を変えうるか</strong>をみるための道具になります。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          4. minimally contextualized と fully contextualized
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            講義の理解でつまずきやすいのが、「threshold はどこまで文脈を入れるのか」という点です。GRADE では、certainty assessment の文脈化をいくつかの段階で考えます。システマティックレビューでは、まだ推奨を出す段階ではないため、完全に文脈化しすぎると読者の判断を奪ってしまいます。一方、ガイドラインでは、利益・害・価値観・資源・実行可能性をまとめて推奨にするため、より文脈化された判断が必要になります。
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-bold text-gray-800 mb-2">Minimally contextualized</h5>
              <p>
                主に「重要な利益または害がありうるか」「無効果や些細な効果を超えるか」を見る。システマティックレビューの SoF table で使いやすい。
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-bold text-gray-800 mb-2">Partially contextualized</h5>
              <p>
                outcome ごとに、効果の大きさを trivial / small / moderate / large などの範囲で解釈する。価値観は一部入るが、全アウトカムの総合判断ではない。
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-bold text-gray-800 mb-2">Fully contextualized</h5>
              <p>
                すべての critical outcomes、相対的重要性、価値観、害、負担、資源を同時に扱う。ガイドラインの EtD と推奨決定に近い。
              </p>
            </div>
          </div>
          <p>
            この動画は Cochrane Learning Live の講義として、特に<strong>システマティックレビューで findings を解釈し、summarise する人</strong>を対象にしています。そのため、重点は fully contextualized
            な推奨決定そのものではなく、レビュー段階で閾値をどう事前指定し、確実性評価にどう使うかにあります。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          5. 二値アウトカムの threshold 設定
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            二値アウトカムとは、死亡、入院、再発、有害事象、治療成功など、起きた・起きないで表されるアウトカムです。講義で重視されるのは、二値アウトカムの threshold
            を、できるだけ<strong>絶対効果</strong>で考えることです。相対リスクだけを見ると、ベースラインリスクが低い集団では相対的に大きな効果でも、患者にとっての絶対的な差は小さいことがあります。
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h5 className="font-bold text-indigo-900 mb-2">例：1,000人あたりの絶対効果で考える</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>0から5人減少：ほぼ差なし、または trivial benefit。</li>
              <li>6から20人減少：small benefit とみなす。</li>
              <li>21から50人減少：moderate benefit とみなす。</li>
              <li>51人以上減少：large benefit とみなす。</li>
            </ul>
            <p className="mt-3 text-indigo-900">
              これはあくまで架空例です。実際の threshold は、アウトカムの重大性、患者価値、ベースラインリスク、介入負担、利用可能な既存基準に基づいて決める必要があります。
            </p>
          </div>
          <p>
            たとえば点推定値が「1,000人あたり 18人の入院を減らす」であれば、上の架空 threshold では small benefit
            です。しかし 95% CI が「40人減少から 2人増加」まで広がるなら、真の効果は moderate benefit
            かもしれない一方で、ほぼ無効果またはわずかな害かもしれません。この場合、効果の大きさの分類が安定しないため、imprecision の downgrading を考えます。
          </p>
          <p>
            重要なのは、二値アウトカムでは「相対効果」と「絶対効果」の両方を SoF table に示しながら、threshold 判断は読者にとって意味が伝わりやすい絶対効果に寄せることです。患者にとっては RR 0.80
            よりも、「1,000人中何人が入院を避けられるか」のほうが意思決定に直結します。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          6. 連続アウトカムの threshold 設定
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            連続アウトカムでは、痛みスコア、生活の質、機能スコア、血圧、HbA1c など、数値の差として結果が示されます。ここでの難しさは、尺度がアウトカムごとに異なることです。痛み 0から10 の 1点差、SF-36
            の 5点差、HbA1c の 0.3%差は、同じ「数値差」でも意味がまったく違います。
          </p>
          <p>
            講義の実践的な方向性は、まず<strong>minimally important difference（MID）や patient-important threshold</strong>を探すことです。既存の臨床分野で合意された MCID、患者アンカー研究、ガイドラインで使われた閾値があれば、それを優先します。なければ、専門家・患者代表・既存文献から、少なくとも暫定的な threshold を明示します。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h5 className="font-bold text-amber-900 mb-2">よい threshold の条件</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>患者にとって意味のある変化を反映している。</li>
                <li>アウトカム尺度の向きと単位が明確。</li>
                <li>small / moderate / large の範囲が説明可能。</li>
                <li>解析結果を見る前に決められている。</li>
              </ul>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
              <h5 className="font-bold text-rose-900 mb-2">注意すべき threshold</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>統計的有意差をそのまま臨床的重要性に置き換える。</li>
                <li>標準化平均差だけで患者への意味を説明する。</li>
                <li>結果が有利に見えるように境界を後から動かす。</li>
                <li>尺度の最小重要差が集団や状況で変わる点を無視する。</li>
              </ul>
            </div>
          </div>
          <p>
            連続アウトカムで SMD（standardized mean difference）を使う場合も、講義の考え方では、SMD をそのまま「小・中・大」と機械的に読むのではなく、可能なら familiar instrument
            に戻す、MID 単位に換算する、または absolute interpretation を添えることが望まれます。GRADE の目的は数式の美しさではなく、意思決定者が結果を理解できることだからです。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          7. thresholds と imprecision downgrading
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            GRADE の5つの downgrade ドメインのうち、この講義で thresholds と最も強く結びつくのが <strong>imprecision</strong>
            です。Cochrane Handbook でも、imprecision の説明では、信頼区間が「小さい効果または無効果」と「重要な利益または害」の両方を含むかを示すこと、閾値が分かるなら数値を示すことが勧められています。
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
            <h5 className="font-bold text-gray-800">判断の流れ</h5>
            <ol className="list-decimal pl-5 space-y-2">
              <li>アウトカムごとに、重要な利益・重要な害・些細な効果の threshold を置く。</li>
              <li>点推定値がどの範囲にあるか確認する。</li>
              <li>95% CI が、同じ判断範囲に収まるか、複数の重要な範囲をまたぐか確認する。</li>
              <li>CI が意思決定を変える threshold を大きくまたぐ場合、imprecision で1段階、場合によっては2段階以上 downgrade を検討する。</li>
              <li>downgrade の理由を SoF table の footnote に具体的に書く。</li>
            </ol>
          </div>
          <p>
            ここで「CI が null をまたぐから downgrade」とだけ覚えるのは不十分です。重要なのは null
            ではなく、意思決定に関係する threshold です。CI が null をまたいでも、全体が「些細な差」の範囲内に収まるなら、臨床的解釈は安定しているかもしれません。逆に、統計的に有意でも CI
            が small benefit から large benefit まで広がる場合、効果の大きさへの確信は十分でない可能性があります。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          8. worked examples の読み方
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Cochrane のイベント概要では、このセッションのトピックとして worked examples が明記されています。実例で伝えたいのは、threshold を置くと、点推定値・信頼区間・certainty rating
            の関係が見えるようになるということです。
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-2">例1：利益の推定値は小さいが、CI が広い</h5>
              <p>
                介入により、再入院が 1,000人あたり 12人減る。事前 threshold では 5人以下が trivial、6から20人が small、21人以上が moderate
                とする。95% CI は 35人減少から 4人増加。
              </p>
              <p className="mt-2">
                点推定値は small benefit だが、CI は moderate benefit から trivial/no effect、さらには小さな害まで含む。したがって「小さい利益がある」と断言せず、imprecision
                で downgrade を検討する。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-2">例2：統計的有意だが、重要性は境界上</h5>
              <p>
                介入により痛みスコアが 0から10 で 0.4点改善し、95% CI は 0.1から0.7点改善。統計的には差がありそうだが、患者にとって重要な差を 1.0点以上と事前指定していた場合、CI
                全体が重要差に届かない。
              </p>
              <p className="mt-2">
                この場合、「統計的に有意だから重要な効果」とは言えない。certainty は「重要な改善がない、または些細な改善にとどまる」という解釈に対して評価する。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h5 className="font-bold text-indigo-900 mb-2">例3：害の threshold は利益と別に考える</h5>
              <p>
                介入が重篤な有害事象を 1,000人あたり 7人増やす可能性がある。死亡や重篤な障害につながる害なら、7人でも重要かもしれない。軽微な一過性の副作用なら、同じ7人でも重要性は小さいかもしれない。
              </p>
              <p className="mt-2">
                threshold はアウトカムの価値に依存する。利益と害を同じ幅で機械的に扱わず、outcome importance と患者価値を反映させる。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          9. SoF table と EtD への接続
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Summary of findings table は、主要アウトカムごとに効果推定値、参加者数、研究数、GRADE certainty、コメント・脚注を提示する表です。thresholds
            はこの表の「certainty」と「コメント・脚注」を強く支えます。
          </p>
          <p>
            たとえば footnote に「CI が重要な利益の threshold と重要な害の threshold の両方を含むため、imprecision で2段階 downgrade」と書ければ、読者はなぜ rating
            が下がったかを理解できます。逆に「サンプルサイズが小さいため downgrade」とだけ書くと、どの判断が不安定なのかが見えません。
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
            <p className="font-bold text-indigo-900 mb-1">EtD との関係</p>
            <p>
              EtD framework では、望ましい効果・望ましくない効果・価値観・資源・公平性・受容可能性・実行可能性などを統合します。thresholds
              はその前段階として、各 outcome の効果の大きさと確実性を、説明可能な単位で整理する役割を持ちます。
            </p>
          </div>
          <p>
            したがって、この講義は GRADE の「rating 作業」だけの話ではありません。最終的には、レビュー著者、ガイドラインパネル、臨床家、患者が同じ表を見たときに、「なぜこの効果を小さいと呼ぶのか」「なぜこの certainty
            なのか」を共有するための方法論です。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          10. Q&amp;A パートで想定される論点
        </h4>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            動画説明では Q&amp;A が 45:37 から始まることが示されています。このテーマで受講者がつまずきやすい質問は、主に「threshold を誰が決めるのか」「分野で合意がないときどうするのか」「レビュー著者が価値判断をしすぎてよいのか」に集約されます。
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="font-bold text-indigo-900">Q1. threshold は universal に決められるのか？</p>
              <p>
                多くの場合、 universal ではありません。同じ risk difference でも、死亡、脳卒中、軽い吐き気、短期疼痛では重要性が違います。既存ガイドラインや患者研究があるなら参照し、なければ暫定 threshold
                とその根拠を明記します。
              </p>
            </div>
            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="font-bold text-indigo-900">Q2. threshold を決められないなら GRADE はできないのか？</p>
              <p>
                できないわけではありません。ただし、threshold が曖昧なままなら、certainty 判断も曖昧になります。最低限、「どの程度なら重要な利益・害とみなすか」を言葉で説明し、可能な限り数値化します。
              </p>
            </div>
            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="font-bold text-indigo-900">Q3. 統計的有意性は不要になるのか？</p>
              <p>
                不要になるのではなく、主役ではなくなります。GRADE では、p値よりも、効果の大きさ、信頼区間、患者にとっての重要性、バイアスや非直接性などを総合して解釈します。
              </p>
            </div>
            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="font-bold text-indigo-900">Q4. レビューとガイドラインで同じ threshold を使うべきか？</p>
              <p>
                同じ場合もありますが、役割が違います。レビューでは outcome ごとの効果の大きさと確実性を透明化することが中心です。ガイドラインでは複数アウトカムと価値観を統合するため、より文脈化された threshold
                や EtD 判断が必要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          11. 実務チェックリスト
        </h4>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
          <ol className="list-decimal pl-5 space-y-2">
            <li>PICO と critical / important outcomes を先に決める。</li>
            <li>アウトカムごとに、患者にとって意味のある効果量を確認する。</li>
            <li>二値アウトカムは、できるだけ絶対効果で threshold を置く。</li>
            <li>連続アウトカムは、MID、MCID、患者アンカー研究、既存ガイドラインを探す。</li>
            <li>利益と害を同じ threshold で扱わない。アウトカムの重さを反映する。</li>
            <li>threshold は結果を見る前に置き、プロトコルや methods に残す。</li>
            <li>点推定値だけでなく、信頼区間がどの threshold をまたぐかを確認する。</li>
            <li>imprecision の footnote には、またいでいる threshold と意思決定上の意味を書く。</li>
            <li>SoF table では、読者が自分で再解釈できるよう、絶対効果と certainty を併記する。</li>
            <li>ガイドライン化する場合は、EtD で全アウトカム、価値観、資源、受容可能性を統合する。</li>
          </ol>
        </div>
      </section>

      <section className="mb-2">
        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 p-2 rounded">
          12. Take-home messages
        </h4>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <ol className="list-decimal pl-5 space-y-2 text-sm text-indigo-900">
            <li>thresholds は、GRADE の判断を透明で再現可能にするための「解釈の境界線」。</li>
            <li>certainty は「推定値がきれいか」ではなく、「真の効果が重要な閾値のどちら側にあると確信できるか」。</li>
            <li>二値アウトカムでは、相対効果だけでなく絶対効果で threshold を考える。</li>
            <li>連続アウトカムでは、MID や患者にとって意味のある単位に戻して threshold を置く。</li>
            <li>imprecision は、CI が意思決定上重要な threshold をまたぐかで説明すると分かりやすい。</li>
            <li>threshold は結果を見てから動かさない。事前指定と footnote が信頼性を作る。</li>
            <li>SoF table では outcome ごと、EtD では全体判断として thresholds を活用する。</li>
          </ol>
        </div>
      </section>
    </div>
  </div>
);

export { gradeThresholdsContent };
