# Worst Fix Ever — candidate comparison

Competition: `u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722`
($2 winner-take-all, deadline 25 Nov 2026 20:45 WIB)

Judge criteria, most important first: (1) reads as a one-line commit message
for a bug fix that made everything worse; (2) laugh out loud, a real joke,
not a complaint; (3) captures the specific irony of a repair that broke more
than it mended — the line could only be about this kind of fix; (4) sounds
like a real commit subject line: short, plain, typed by a tired engineer at
the end of a bad day; (5) fresh angle — avoid revert, testing in production,
"broke everything".

## Candidates

| Rank | Chars | Commit message |
| --- | --- | --- |
| 1 | 60 | fix: off-by-one error, now off by two and twice as confident |
| 2 | 75 | fix: timezone bug; every meeting is now yesterday and attendance is perfect |
| 3 | 85 | fix: login bug - users can now log in as each other, which still counts as logging in |
| 4 | 73 | fix: typo in the error message; users can finally read it and are furious |
| 5 | 73 | fix: crash on empty cart by pre-filling every cart with one of everything |
| 6 | 75 | fix: memory leak by restarting the server hourly, including during checkout |
| 7 | 70 | fix: flaky test by deleting it - coverage is 100% and confidence is 0% |
| 8 | 71 | fix: duplicate emails by sending them all at once, to everyone, forever |

## Notes per candidate

1. **Rank 1 — "off-by-one" (60).** (1) textbook commit subject, `fix:` prefix,
   about a fix that backfired; (2) the payoff lands in the last four words —
   the error did not just survive, it got *bigger and prouder*; (3) the irony
   is exact and only fits this competition: the repair worsened the very bug
   it named, and the engineer reports it as progress; (4) plain, short, the
   kind of line typed at 2 a.m. with no energy left to lie about it; (5) no
   revert, no production, no "everything broke" — the angle is the fix's
   confidence, not the damage. Shortest line, every word earns its place.
2. **Rank 2 — "timezone" (75).** Strong payoff ("attendance is perfect") and
   a specific bug, but the joke needs a beat to land: yesterday's meeting
   plus perfect attendance is two ideas, and the second one does the work.
3. **Rank 3 — "login" (85).** Good irony (the fix works, for the wrong
   people) and the deadpan "still counts as logging in" is a real joke — but
   it is the longest line and the setup ("log in as each other") is a
   familiar security-horror image.
4. **Rank 4 — "typo" (73).** Neat reversal (fixing readability made users
   angrier) and very commit-like, but the laugh is a wry smile rather than a
   laugh: the damage is emotional, not structural.
5. **Rank 5 — "empty cart" (73).** A fix that over-corrects into absurdity,
   specific and visual — but the punchline is the fix itself, and the reader
   has to imagine the consequence rather than being handed it.
6. **Rank 6 — "memory leak" (75).** The "including during checkout" kicker
   is a good sting, yet "restart the server to fix a leak" is a known
   sysadmin gag, so freshness is the weakest of the top six.
7. **Rank 7 — "flaky test" (70).** "Coverage 100%, confidence 0%" is a sharp
   pairing, but deleting a test is adjacent to the banned "revert" family
   (undoing the thing instead of fixing it), and the fix did not make the
   *product* worse, only the measurement.
8. **Rank 8 — "duplicate emails" (71).** Funny escalation ("to everyone,
   forever") but the fix's mechanism is vague — sending them all at once is
   not really a fix for duplicates, so criterion (1) is the weakest here.

## Verdict

**Winner: #1** — "fix: off-by-one error, now off by two and twice as confident"
(60 chars)
