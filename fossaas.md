# FOSSaaS

The City of Munich uses cloud services.

> In cases where the sourcing strategy provides for the external procurement of new or existing IT services, cloud services are preferably procured.

[Sourcing and cloud strategy of the City of Munich](https://risi.muenchen.de/risi/dokument/v/5700029) (page 11)

Cloud services promise to be more flexible, but can also limit the options for action.
Cloud services promise to be more cost-effective due to the specialization of an operator, but can also dictate the price unilaterally.
Every IT service, especially cloud services, therefore require an exit strategy to escape vendor lock-in:

> For critical services: immediate transfer to private cloud or to another public cloud must be possible

[BSI: Recommendations for preparing an exit strategy when using cloud services](https://www.bsi.bund.de/dok/1042922)

If you have to migrate a proprietary cloud service, you are always forced to migrate the entire application as well.
This usually means introducing completely new software, with all the effort involved in data migration, user training and, if necessary, infrastructural integration.

> Price increases and changes in service conditions will hit you hard, and if your service provider discontinues the service completely, you will have a problem.
The remedy can be to only use PaaS services that are based on an open source project. A Database as a Service (DBaaS) based on PostgreSQL, for example, is less susceptible to hard vendor lock-in than proprietary solutions[^devops].

This applies specifically to the Platform as a Service cloud service model, but also to all other cloud service models in general.

If you have to migrate a cloud service based on free software, an *immediate takeover*, as required by the BSI's exit strategy specifications, is possible due to the fundamental free accessibility of the software.

![/fossaas-venn.svg](/fossaas-venn.svg)

Not only can you take free software with you, but even better, the application is usually already available at the exit destination.
This is because cloud services for free software are usually available from various independent service providers.
And if not, there is always the option of going on-premises again.


[^devops]: Sujeevan Vijayakumaran: DevOps ISBN 978-3-8362-9099-9 (page 264)
