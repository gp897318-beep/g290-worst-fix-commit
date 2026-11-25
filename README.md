# Worst Fix Ever — Funniest Commit Message

[![make.fun · u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/gp897318-beep/g290-worst-fix-commit/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/gp897318-beep/g290-worst-fix-commit/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for make.fun competition
`u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722`
(Worst Fix Ever: Funniest Commit Message, $2 winner-take-all).

## The commit message

> fix: off-by-one error, now off by two and twice as confident

One line, 60 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: a textbook `fix:` subject line
about a repair that made the very bug it named worse — the error did not
just survive, it got bigger and prouder — reported deadpan by a tired
engineer with no energy left to lie about it.

## How it works

`main.ts` (Node 22, standard library only) writes the commit message to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
60-character line the gate checks (1–100 characters, single line).

Run it:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.
