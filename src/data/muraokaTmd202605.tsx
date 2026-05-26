import type { ReactNode } from 'react';

const imageBase = './images/muraoka-tmd-202605';

function SlideFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <img src={`${imageBase}/${src}`} alt={alt} className="w-full" loading="lazy" />
      <figcaption className="border-t border-gray-100 px-3 py-2 text-xs leading-relaxed text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function KeyPoint({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm leading-relaxed text-cyan-950">
      {children}
    </div>
  );
}

const muraokaTmd202605Content = (
  <div className="space-y-8">
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-6 border-b-2 border-indigo-100 pb-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
          2026年5月セミナー
        </p>
        <h3 className="text-xl font-bold text-indigo-900">
          村岡先生：口腔顔面痛からみた顎関節症について
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          添付動画「村岡先生口腔顔面痛からみた顎関節症について.mp4」（約96分）を、顎関節症を口腔顔面痛として診るための
          診断・病態分類・初期治療・慢性化対応の流れに沿って整理しました。本文中の画像は、動画内スライドから必要箇所を切り出した画面キャプチャです。
        </p>
      </div>

      <section className="mb-8">
        <h4 className="mb-4 rounded bg-indigo-50 p-2 text-lg font-bold text-indigo-800">
          1. 講義全体のメッセージ
        </h4>
        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            この講義の軸は、患者の訴えが同じ「痛くて口が開けられない」でも、背景病態は一つではない、という点です。顎関節症を
            「顎関節症」という大きな箱で一括りにせず、<strong>咀嚼筋痛障害、顎関節痛障害、顎関節円板障害、変形性顎関節症</strong>
            などに分け、さらに急性・慢性、筋痛主体・関節痛主体・複合病態を見分けていきます。
          </p>
          <KeyPoint>
            <p className="font-bold">本講義の臨床的な芯</p>
            <p className="mt-1">
              「開口障害があるから顎関節症」と止めず、痛みの部位、誘発される動作、開口量、筋触診、関節圧痛、生活背景、慢性化の有無を合わせて、
              どの痛みを治療標的にするかを決める。
            </p>
          </KeyPoint>
          <p>
            3症例はいずれも「痛くて口が開けられない」という主訴ですが、症例1は急性の関節痛、症例2は咀嚼筋痛、症例3は長期化し複数病態と慢性疼痛要素を伴う症例として提示されています。
            ここで、同じ訴えでも診断名と治療の重点が変わることが示されます。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="mb-4 rounded bg-indigo-50 p-2 text-lg font-bold text-indigo-800">
          2. 症例1：急性の顎関節痛としてみる
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <SlideFigure
            src="01_case1_history.jpg"
            alt="症例1の病歴"
            caption="18歳女性。開口時・咀嚼時の左顎部痛で、ロキソニン内服により痛みが少し楽になった症例。"
          />
          <SlideFigure
            src="02_case1_exam.jpg"
            alt="症例1の顎関節症診査"
            caption="自力最大開口量26mm、強制最大開口量42mm。左側の開口時痛・咬合時痛、左顎関節の圧迫・牽引誘発が目立つ。"
          />
        </div>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            症例1では、痛みは左顎関節部に限局し、開口や咀嚼により誘発されます。自力開口は26mmと制限されていますが、強制開口は42mmまで可能で、
            機械的に完全にロックされているというより、痛みによる防御的な開口制限として読めます。
          </p>
          <p>
            診査表では、筋痛所見よりも顎関節側の誘発試験、特に左側の圧迫・牽引で痛みが再現されています。これは、咀嚼筋痛主体ではなく
            <strong>顎関節痛障害</strong>を考える所見です。既往にバセドー病があること、常用薬としてメルカゾールを内服していることも確認されていますが、
            この症例の主病態は局所の急性関節痛として扱われています。
          </p>
          <SlideFigure
            src="03_tmd_pain_criteria.jpg"
            alt="顎関節痛障害の診断基準"
            caption="2019年の顎関節痛障害の診断基準。過去30日間の疼痛、顎運動による変化、疼痛部位、誘発テストで確認する。"
          />
          <p>
            2019年の診断基準では、病歴として「過去30日間に顎・側頭部・耳の中または耳前部の疼痛」と
            「顎運動、機能運動、非機能運動による疼痛の変化」を確認します。診察では、疼痛部位が顎関節部であること、さらに顎関節にいつもの痛みが生じる誘発テストを少なくとも一つ確認します。
          </p>
          <p>
            誘発テストには、顎関節の外側極や外側極付近の触診、最大開口運動、側方・前方運動などが含まれます。スライドでは、触診圧や時間を標準化する必要性も示されており、
            「押して痛い」を曖昧に扱わず、再現性のある診査にする姿勢が強調されています。
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <SlideFigure
              src="04_jstmd_classification.jpg"
              alt="日本顎関節学会2013年の病態分類"
              caption="2013年分類。咀嚼筋痛障害、顎関節痛障害、顎関節円板障害、変形性顎関節症に分ける。"
            />
            <SlideFigure
              src="05_case1_treatment.jpg"
              alt="症例1の治療"
              caption="症例1の治療。顎関節の急性疼痛として、病態説明、負担軽減、消炎鎮痛、経過観察を中心に進める。"
            />
            <SlideFigure
              src="06_case1_summary.jpg"
              alt="症例1のまとめ"
              caption="症例1は急性の関節痛による顎関節症。安静と消炎鎮痛で比較的早期に改善し、保存的治療が基本。"
            />
          </div>
          <p>
            治療としては、病態説明、セルフケア、必要に応じた薬物療法が中心です。症例1は急性で可逆的な病態と考えられ、比較的侵襲の少ない保存的対応が基本になります。
            ロキソニンで痛みが軽減している点も、炎症性・関節痛要素を示唆します。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="mb-4 rounded bg-indigo-50 p-2 text-lg font-bold text-indigo-800">
          3. 症例2：咀嚼筋痛障害としてみる
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <SlideFigure
            src="07_case2_history.jpg"
            alt="症例2の病歴"
            caption="41歳女性。半年前から疲労時に開口しづらく、1か月前から左顎の鈍痛が増えた症例。胃腸炎、パニック発作気味、局所麻酔で気分不快の既往がある。"
          />
          <SlideFigure
            src="08_masticatory_muscle_criteria.jpg"
            alt="咀嚼筋痛障害の診断基準"
            caption="咀嚼筋痛障害の診断基準。側頭筋または咬筋の痛み、触診や最大開口運動によるいつもの痛みの再現を確認する。"
          />
        </div>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            症例2も主訴は「痛くて口が開けられない」ですが、症例1とは病態が異なります。発症経過は半年以上と長く、疲労や日常負荷との関連があり、
            1か月ほど前から左顎の鈍痛が増えています。痛みの性質も、急性の鋭い関節痛というより、咀嚼筋の持続的な負荷・過緊張を疑わせます。
          </p>
          <p>
            咀嚼筋痛障害では、側頭筋または咬筋に痛みがあること、そして触診または最大開口運動で患者の「いつもの痛み」が再現されることが重要です。
            単に筋を押して痛いだけではなく、患者が日常で困っている痛みと同じ痛みかどうかを確認します。
          </p>
          <SlideFigure
            src="09_two_cases_message.jpg"
            alt="2症例の比較メッセージ"
            caption="同じ主訴でも別病態の可能性があり、治療には共通項目と病態ごとの項目がある。"
          />
          <p>
            症例1と症例2を並べることで、講義は「同じ症状でも別の病態がありうる」ことを示します。治療にも共通項目と異なる項目があります。
            共通するのは病態説明、セルフケア、スプリントなどですが、関節痛にはNSAIDs、筋痛には温罨法、開口ストレッチ、咀嚼筋マッサージなどがより適応しやすいと整理されています。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <SlideFigure
              src="10_initial_treatment.jpg"
              alt="初期治療の整理"
              caption="初期治療。共通治療は病態説明・セルフケア・スプリント。関節痛にはNSAIDs、筋痛には温罨法・開口ストレッチ・咀嚼筋マッサージ。"
            />
            <SlideFigure
              src="11_patient_explanation.jpg"
              alt="患者説明"
              caption="治療開始時には、病態と原因、診断名、治療法、治療目標、予後を患者に説明し、理解してもらうことが重要。"
            />
          </div>
          <p>
            TMD治療の開始時には、患者に現在の病態と原因を適切に伝えることが最重要とされています。単に「顎関節症です」と告げるだけでなく、
            病態の説明、診断名、病因、治療法、治療目標、予後を伝え、患者が理解し安心できるようにします。スライドでは、説明して安心させるだけでも
            3か月以内に80%以上の患者でTMDが改善したという報告も紹介されています。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <SlideFigure
              src="12_selfcare.jpg"
              alt="セルフケア"
              caption="セルフケア。歯を離す、柔らかい食事、ガム禁止、あくびのコントロール、姿勢などを指導する。"
            />
            <SlideFigure
              src="13_nsaids.jpg"
              alt="NSAIDs"
              caption="関節痛に適応される薬物療法。NSAIDsの中で顎関節症への適応がある薬剤としてイブプロフェン等が紹介される。"
            />
          </div>
          <p>
            セルフケアでは、上下の歯を離すこと、柔らかい食事、ガムの禁止、あくびのコントロール、普段の姿勢・寝る姿勢への注意などが示されます。
            これらは患者自身が痛みを増幅させる行動を減らすための介入です。
          </p>
          <SlideFigure
            src="14_muscle_pain_features.jpg"
            alt="筋痛の特徴"
            caption="筋痛の特徴。限局しにくい鈍痛、食事時・食後の悪化、入浴やマッサージで緩和、肩こり・頭痛の併発など。"
          />
          <p>
            筋痛の特徴は、限局した一点の痛みではなく「この辺の痛み」と表現されやすいこと、持続性の鈍痛で軽度から中等度であること、
            食事時や食後に悪化し、入浴やマッサージで軽くなることです。肩こりや頭痛を伴うことも多く、関節痛とは生活上の訴え方が異なります。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="mb-4 rounded bg-indigo-50 p-2 text-lg font-bold text-indigo-800">
          4. 症例3：複数病態と慢性化を考える
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <SlideFigure
            src="15_case3_history.jpg"
            alt="症例3の病歴"
            caption="63歳女性。補綴後の違和感、右顎関節痛、スプリント装着後の変化、左側にも痛みが出現し、食事困難と開口困難が続く。"
          />
          <SlideFigure
            src="16_clinical_diagnosis.jpg"
            alt="臨床診断"
            caption="従来分類では単一診断になりやすいが、2019年分類では咀嚼筋痛障害と顎関節痛障害を重複診断できる。"
          />
        </div>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            症例3は、1年前の補綴治療後の違和感から始まり、3か月前に右顎関節痛、1か月前に左側痛も出現した症例です。開口時や咀嚼時に重だるく、
            食事が十分にできず、痛みそのものより「関節が動かない感じ」が目立つとされています。
          </p>
          <p>
            この症例で重要なのは、病態が単一ではないことです。従来の2001年分類では「顎関節症I型：咀嚼筋障害」と単一診断になりやすかった一方、
            2019年の病態分類では、<strong>咀嚼筋痛障害</strong>と<strong>顎関節痛障害</strong>を重複診断できます。
            これは、治療標的を一つに固定しないために重要です。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <SlideFigure
              src="17_new_classification.jpg"
              alt="顎関節症の新分類"
              caption="顎関節症に関する新分類。DC/TMD、INfORM、ICOP、日本顎関節学会2019分類などが整理されている。"
            />
            <SlideFigure
              src="18_icop.jpg"
              alt="ICOP第1版の筋筋膜性口腔顔面痛分類"
              caption="ICOP第1版では筋筋膜性口腔顔面痛として、急性・慢性、一次性・二次性、炎症・スパズムなどの下位分類を示す。"
            />
          </div>
          <p>
            講義後半では、DC/TMD、INfORM、ICOP、日本顎関節学会2019分類など、顎関節症・口腔顔面痛の分類が整理されます。
            ここで顎関節症は、歯科のローカルな病名ではなく、口腔顔面痛分類の一部として位置づけ直されます。
          </p>
          <SlideFigure
            src="19_summary_before_chronic.jpg"
            alt="慢性疼痛へ移る前のまとめ"
            caption="痛くて口が開けられない症例でも、筋痛・関節痛・その他の顎関節関連疾患との鑑別が必要。"
          />
          <p>
            ここまでのまとめとして、口が開かない症例でも、筋痛による開口制限、関節痛による防御、円板障害、変形性顎関節症、あるいはその他の口腔顔面痛を考える必要があります。
            顎関節症を「咀嚼筋と関節だけの疾患」として狭く見すぎると、慢性疼痛や痛覚変調性疼痛の要素を見落とします。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="mb-4 rounded bg-indigo-50 p-2 text-lg font-bold text-indigo-800">
          5. 専門治療への移行、再評価、慢性疼痛
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <SlideFigure
            src="20_2024_guideline.jpg"
            alt="顎関節症の治療指針2024案"
            caption="専門治療への移行と再評価。3か月以上の症状持続、基本治療で改善しない場合、画像診断や心身医学的対応が必要な場合など。"
          />
          <SlideFigure
            src="21_nociplastic_pain.jpg"
            alt="痛覚変調性疼痛"
            caption="IASP 2017年の痛覚変調性疼痛。侵害受容性疼痛・神経障害性疼痛に並ぶ第3の機構分類として紹介される。"
          />
        </div>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
          <p>
            2024年治療指針案では、深刻な開口障害や痛みが3か月以上続く場合、基本治療を2週間から1か月、長くとも3か月程度行っても改善しない場合、
            円板整復を目的とした治療や外科処置でMRI・CTなどが必要な場合、慢性疼痛などで心身医学・精神医学的対応が必要な場合は、専門治療への移行や対診が望ましいとされています。
          </p>
          <p>
            慢性化した痛みでは、器質的病変だけでは説明しにくい痛みが残ることがあります。そこで講義では、IASP 2017年の
            <strong>nociplastic pain（痛覚変調性疼痛）</strong>が紹介されます。これは、組織損傷や体性感覚神経系の明確な病変がない、またはそれだけでは説明できないにもかかわらず、
            侵害受容の変化によって痛みが生じる状態です。
          </p>
          <SlideFigure
            src="22_chronic_treatment_goals.jpg"
            alt="慢性疼痛に移行した場合の治療目標"
            caption="慢性疼痛では、無痛を唯一の目標にせず、疼痛管理、機能・身体・精神的健康、QOL、有害転帰の最小化を目標にする。"
          />
          <p>
            慢性疼痛に移行した場合、治療目標は「痛みをゼロにする」ことだけではありません。疼痛管理を最適化し、機能的能力、身体的・精神的健康、
            患者のQOLを上げ、有害転帰を最小化することが目標になります。これは顎関節症だけでなく、口腔顔面痛全般の慢性疼痛対応に共通する視点です。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="mb-4 rounded bg-indigo-50 p-2 text-lg font-bold text-indigo-800">
          6. 診療で使うための整理
        </h4>
        <div className="space-y-4 text-sm leading-relaxed text-gray-700">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h5 className="mb-2 font-bold text-gray-800">関節痛を疑う流れ</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>痛みが顎関節部に限局しやすい。</li>
                <li>開口、側方運動、前方運動、咀嚼で誘発される。</li>
                <li>関節の外側極や周囲触診でいつもの痛みが再現される。</li>
                <li>急性ではNSAIDs、安静、負担軽減で改善しやすい。</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h5 className="mb-2 font-bold text-gray-800">筋痛を疑う流れ</h5>
              <ul className="list-disc space-y-1 pl-5">
                <li>「この辺が痛い」と広がりをもって訴える。</li>
                <li>持続性の鈍痛で、食事時・食後・夕方に悪化しやすい。</li>
                <li>咬筋・側頭筋の触診、最大開口でいつもの痛みが再現される。</li>
                <li>温罨法、開口ストレッチ、咀嚼筋マッサージ、生活指導が重要。</li>
              </ul>
            </div>
          </div>
          <p>
            初診時には、痛みの場所を患者に指で示してもらい、どの動作で痛むのかを分けます。開口量は自力最大開口と強制最大開口を分け、
            痛みによる制限なのか、機械的制限なのかを考えます。筋痛、関節痛、円板障害、変形性変化は重複しうるため、診断は一つに固定しない姿勢が大切です。
          </p>
        </div>
      </section>

      <div className="rounded bg-indigo-50 p-4 border-l-4 border-indigo-500">
        <h4 className="mb-2 font-bold text-indigo-900">Take-home messages</h4>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-indigo-900">
          <li>「痛くて口が開かない」は単一病態ではない。筋痛、関節痛、円板障害、変形性変化、慢性疼痛を分けて考える。</li>
          <li>診断では、病歴、痛みの部位、痛みを変化させる顎運動、触診・誘発テスト、開口量をセットで見る。</li>
          <li>急性の関節痛では、安静、負担軽減、NSAIDsなどの保存的治療が基本になる。</li>
          <li>咀嚼筋痛では、生活指導、セルフケア、温罨法、ストレッチ、咀嚼筋マッサージが中心になる。</li>
          <li>患者説明は治療そのもの。病態、診断名、原因、治療法、目標、予後を説明し、理解してもらう。</li>
          <li>3か月以上続く症状、基本治療で改善しない症状、画像診断や心身医学的対応が必要な症例は専門治療・再評価へ進める。</li>
          <li>慢性化した場合は「無痛」だけを目標にせず、機能、QOL、精神的健康、有害転帰の最小化を含めて治療目標を再設定する。</li>
        </ol>
      </div>
    </div>
  </div>
);

export { muraokaTmd202605Content };
