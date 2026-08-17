import Link from "next/link";

const stats = [
  {
    label: "Total Contacts",
    value: "1,284",
    change: "+12.5%",
    color: "text-blue-600",
  },
  {
    label: "Emails Sent",
    value: "8,421",
    change: "+8.2%",
    color: "text-purple-600",
  },
  {
    label: "Open Rate",
    value: "42.7%",
    change: "+4.1%",
    color: "text-green-600",
  },
  {
    label: "Click Rate",
    value: "8.4%",
    change: "+2.3%",
    color: "text-orange-600",
  },
];

const campaigns = [
  {
    name: "Summer Sale",
    status: "Active",
    sent: "2,450",
    openRate: "48.2%",
    clickRate: "10.4%",
  },
  {
    name: "Welcome Series",
    status: "Active",
    sent: "1,820",
    openRate: "52.1%",
    clickRate: "12.8%",
  },
  {
    name: "Product Launch",
    status: "Completed",
    sent: "3,210",
    openRate: "39.4%",
    clickRate: "7.2%",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              MarketFlow
            </h1>
            <p className="text-sm text-slate-500">
              Email Marketing Automation
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/campaigns"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create Campaign
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              M
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Marketing Dashboard
          </h2>
          <p className="mt-1 text-slate-500">
            Monitor your email campaigns and audience engagement.
          </p>
        </div>

        {/* Statistics */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">
                {stat.label}
              </p>

              <div className="mt-3 flex items-end justify-between">
                <p className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>

                <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Main content */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Campaign performance */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Campaign Performance
                </h3>
                <p className="text-sm text-slate-500">
                  Your recent email campaigns
                </p>
              </div>

              <Link
                href="/campaigns"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View all
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="pb-3 font-medium">Campaign</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Sent</th>
                    <th className="pb-3 font-medium">Open Rate</th>
                    <th className="pb-3 font-medium">Click Rate</th>
                  </tr>
                </thead>

                <tbody>
                  {campaigns.map((campaign) => (
                    <tr
                      key={campaign.name}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <td className="py-4 font-medium text-slate-900">
                        {campaign.name}
                      </td>

                      <td className="py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                            campaign.status === "Active"
                              ? "bg-green-50 text-green-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {campaign.status}
                        </span>
                      </td>

                      <td className="py-4 text-slate-600">
                        {campaign.sent}
                      </td>

                      <td className="py-4 text-slate-600">
                        {campaign.openRate}
                      </td>

                      <td className="py-4 text-slate-600">
                        {campaign.clickRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick actions */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Quick Actions
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage your marketing activities.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/campaigns"
                className="block rounded-lg border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-medium text-slate-900">
                  Create Campaign
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Create and schedule an email campaign.
                </p>
              </Link>

              <Link
                href="/contacts"
                className="block rounded-lg border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-medium text-slate-900">
                  Manage Contacts
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Add and organize your audience.
                </p>
              </Link>

              <Link
                href="/automations"
                className="block rounded-lg border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-medium text-slate-900">
                  Create Automation
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Build an automated customer journey.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Marketing insight */}
        <section className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <p className="text-sm font-medium text-blue-700">
            Marketing Insight
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Your Welcome Series is your best-performing campaign.
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            The Welcome Series currently has a 52.1% open rate and a 12.8%
            click rate. Consider using similar subject lines and content
            strategies in your other campaigns.
          </p>
        </section>
      </div>
    </main>
  );
}
