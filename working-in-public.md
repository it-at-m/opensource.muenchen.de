# Working in Public

As a developer, it might feel unusual to make your code publicly accessible.  
Does that mean the whole world can see any potential mistakes?  
Yes, but the good news is: the people who actually understand your mistakes are often willing to help you.  
The world of open source is especially characterized by a constructive error culture.  
In the best case, others out there will find bugs or help us improve our code.  
In the worst case, nobody will read your code at all.

Of course, there are some "don'ts" from the area of [security](security) (no passwords, personal data, etc.), but this is standard practice even without FOSS publication.  
Before publishing in a public repository, the entire Git history and all related artifacts should be carefully reviewed for accidentally committed secrets or sensitive data. If such information is found, the affected secrets must be immediately revoked or rotated. Removing secrets from the latest revision does not remove them from history, clones, forks, or cached references.

In principle, all developers are allowed to work under their real names and/or with their private, personal GitHub profiles.  
Of course, purely business accounts as well as pseudonymous accounts are also permitted.

If you still need help publishing code, feel free to check out what colleagues have already published at [github.com/it-at-m](https://github.com/it-at-m).

> [!NOTE]
> If you’re not embarrassed by your first version, you released too late.
>
> *(Common saying)*

If there are reservations from specialist departments about developing their requirements publicly, it is exceptionally possible to document the internal requirements for an open source project internally within LHM, while the code is maintained in a repository [from the very beginning](https://kb.prototypefund.de/books/communityaufbau-und-zusammenhalt/page/kommunikationsstrategien-fur-community-building-und-management).  
The repository can remain private at first and will be published after approval.  
Managing the code in an internal repository first and later making it public creates a relatively high effort for cleaning up internal information.
