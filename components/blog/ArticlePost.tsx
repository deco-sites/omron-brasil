import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface InfoProps {
  title: string;
  paragraphs?: string[];
}

export interface ArticlePostProps {
  image: LiveImage;
  graphicImage: {
    desktop: LiveImage;
    mobile: LiveImage;
  }
}

function Info({ title, paragraphs }: InfoProps) {
  return (
    <div class="flex flex-col lg:flex-row items-start justify-center gap-8 w-full h-full">
      <h1 class="font-bold text-3xl">{title}</h1>

      <div class="flex flex-col h-full w-full gap-2">
        {paragraphs?.map((item) => (
          <p class="text-base">{item}</p>
        ))}
      </div>
    </div>
  )
}

export default function ArticlePost({ image, graphicImage }: ArticlePostProps) {
  return (
    <div class="flex flex-col w-full h-full gap-16">
      <Info
        title="Why are there two numbers to a blood pressure reading?"
        paragraphs={["A blood reading has two values: a systolic reading and diastolic reading. Systolic pressure is the higher number, it’s a measure of when your heart beats and pushes blood through the arteries. And diastolic pressure is measured when your heart is resting and filling with blood. So, for example, your blood pressure might be 120 over 80."]}
      />

      {image && (
        <figure class="w-full h-full">
          <Image
            src={image}
            width={944}
            height={480}
            class="w-full h-full"
            loading="lazy"
          />
        </figure>
      )}

      <Info
        title="How do you know if you’re hypertensive?"
        paragraphs={[
          "Hypertension is a symptomless condition this means the only way to know if you have it, is to regularly take a blood pressure measurement. If you see your blood pressure reading between 120-129 (systolic) and 80-84 (diastolic) this is perfect and within the normal range.", 
          "The definition of high blood pressure, according to the European Society of Hypertension, is anything above 140/90 mmHg. But for home monitoring where we are likely to be more relaxed, the limit is slightly lower at 135/85.If your blood pressure is between 120/80 and 140/90, you might be at risk or you might already be hypertensive. It is important to bring it under control and share the results with your GP so that they can help you with a proper treatment plan."
        ]}
      />

      <div class="bg-[#003153] flex items-center justify-center p-6 md:p-16">
        <p class="text-white font-bold leading-7 text-2xl">Remember that you can get readings at home, but only a doctor can make a proper diagnosis of hypertension.</p>
      </div>

      <div class="flex flex-col w-full h-full items-start text-start gap-11">
        <div class="flex flex-col gap-4">
          <h1 class="font-bold">When is your blood pressure dangerously high?</h1>
          <p>
            A blood pressure reading of over 180/120 is dangerously high. Doctors call this a hypertensive crisis, and it requires immediate treatment. Call your closest medical centre to understand what steps you need to follow to get the treatment you need.
          </p>

          <p>All this can be summarised in a blood pressure chart, like this:</p>
        </div>

        {graphicImage && (
          <>
            <figure class="hidden md:block w-full h-full">
              <Image
                src={graphicImage.desktop}
                width={944}
                height={696}
                class="w-full h-full"
                loading="lazy"
              />
            </figure>

            <figure class="block md:hidden w-full h-full">
              <Image
                src={graphicImage.mobile}
                width={380}
                height={580}
                class="w-full h-full"
                loading="lazy"
              />
            </figure>
          </>
        )}

        <p>To check your blood pressure against the chart, start from your systolic pressure on the left-hand side, and move your finger to the right until you reach your diastolic pressure. The colour will tell you whether you have normal or abnormal blood pressure.</p>
      </div>
    </div>
  )
}
