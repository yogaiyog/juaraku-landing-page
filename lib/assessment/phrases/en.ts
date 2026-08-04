import type { PhraseBank } from "../types";

/**
 * English sentence bank for the trial class assessment generator.
 * `{name}` placeholders are replaced with the student's name.
 */
export const en: PhraseBank = {
  title: "Trial Class Result",
  dimension: {
    speed: {
      high: [
        "{name} is able to follow instructions quickly.",
        "{name} quickly understands directions and completes tasks well.",
        "{name} showed very good learning speed during the class.",
      ],
      growthLow: [
        "{name} needs a little more time to understand instructions, but keeps showing progress throughout the class.",
        "With regular practice and repetition, {name} will become more comfortable following the flow of the lesson.",
      ],
      growthMid: [
        "{name} is able to follow the lesson well at their own pace.",
        "{name} has good learning speed and keeps showing progress.",
      ],
    },
    concept: {
      high: [
        "{name} understands the concepts taught in class well.",
        "{name} is able to grasp new concepts quickly.",
        "{name} showed a good understanding of today's material.",
      ],
      growthLow: [
        "{name} still needs repetition for the concepts to really stick.",
        "With more practice, {name}'s understanding of the concepts will keep getting stronger.",
      ],
      growthMid: [
        "{name} already understands the basic concepts well.",
        "{name} understands the material given and is ready to learn the next topic.",
      ],
    },
    problem: {
      high: [
        "{name} is able to find solutions when facing challenges.",
        "{name} thinks logically when working on tasks.",
        "{name} does not give up easily when facing difficulties.",
      ],
      growthLow: [
        "{name} still needs practice to feel more confident solving challenges independently.",
        "The more projects {name} works on, the more problem-solving skills will develop.",
      ],
      growthMid: [
        "{name} is starting to solve challenges with guidance from the mentor.",
        "{name} shows good problem-solving skills that will keep sharpening through future projects.",
      ],
    },
    focus: {
      high: [
        "{name} stayed focused throughout the lesson and completed tasks with full attention.",
        "{name} maintained good focus and stayed on task during class.",
        "{name} paid close attention and remained engaged from start to finish.",
      ],
      growthLow: [
        "{name} needs a little help staying focused, and will improve with shorter, more varied activities.",
        "With practice and gentle reminders, {name}'s focus will keep getting stronger.",
      ],
      growthMid: [
        "{name} is able to stay focused with occasional reminders.",
        "{name} shows good focus and will keep improving with continued practice.",
      ],
    },
  },
  shared: {
    opening: [
      "During today's trial class, {name} showed great enthusiasm for learning.",
      "{name} joined the trial class enthusiastically and was active throughout the lesson.",
      "Today {name} participated in the trial class well and showed positive potential.",
    ],
    generic: [
      "{name} stayed focused throughout the activities from start to finish.",
      "{name} actively took part in every activity.",
      "{name} seemed enthusiastic throughout the learning process.",
    ],
    dynamic: [
      "{name} has good curiosity and enjoys trying new things.",
      "{name} shows good potential to keep growing in coding and AI.",
      "{name} enjoys the learning process and is not afraid to try new challenges.",
    ],
    allHighGrowth: [
      "{name} showed excellent performance across all aspects of the assessment.",
      "{name} has a very strong foundation to move on to the next level.",
    ],
    reinforcement: [
      "With regular learning, {name}'s abilities will keep developing.",
      "Through upcoming projects, {name}'s abilities will be sharpened even more.",
      "{name} has good potential to grow even further.",
      "Each session brings {name} a little more confidence and skill.",
      "With regular guidance, {name} will keep making steady progress.",
      "Every completed project gives {name} something new to feel proud of.",
      "With each new task, {name} becomes a little more skilled and confident.",
      "Regular practice will help {name} keep improving step by step.",
    ],
    closing: [
      "Overall, {name} showed excellent potential for learning coding and AI. We are confident that with structured learning, {name} will keep growing and become more confident in building technology projects.",
      "We were happy to see {name}'s progress during the trial class. We hope this is a great start to an enjoyable coding and AI journey with JuaraKu.",
      "Thank you for joining the trial class. We look forward to accompanying {name} to keep learning, creating, and developing technology skills in the future.",
    ],
  },
};
