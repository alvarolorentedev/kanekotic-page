---
authors: kanekotic
draft: false
title: TDD is not called TDT for a reason
description: 'When people elaborate on TDD they seem to stay focused on the first
  letter but miss the focus of the other two letters. '
tags:
- webdev
- testing
- architecture
- programming
published: 2022-11-28T09:00:00+01:00
canonical_url: ''
cover_image: https://www.kanekotic.com/img/tdd.png
series: ''

---
I have observed quite a few articles lately that elaborate on issues with TDD. Nevertheless, they focused on the first letter but miss the focus of the other two letters.

## Not A Testing Strategy

If you take anything out of this article, please think about this quote:

> If TDD was about testing it would have been called TDT (test driven testing).

The fact that we do test upfront in TDD does not mean at all that there is a direct relationship with a testing strategy, and as many preach, unit testing is not enough to create robust software.

## A Design Strategy

TDD is actually a **Design Strategy**, this is why the 2 last letter are for **driven development**. This means that your final code is being moved by those tests and not the other way around.

The design that TDD will move you towards to is **minimalistic**. Reducing the tendency of overengineering solutions when you don't need them. This brings a **reducing time to market**, by reducing the **accidental complexity**.

When doing TDD most developers have the complexity of letting go their **egos**, the problem when people fight against the practices is because they think to know better. Nevertheless, it tends to **generate waste** because most code optimizations tend to be premature and most extensibility points will never be modified.

There are places where TDD does not fit, for example while investigating a technology through a spike or PoC because in these cases, the person is exploring knowledge not generating value. In other cases, TDD allows you to bring value in the shortest way possible.

## Conclusion

If you are an experienced developer, do not discard TDD because you think you know better, allow it to challenge you. If you are a new developer, learn from the different ways of doing things and understand the value, don't take articles at face value.